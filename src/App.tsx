import React, {useState} from 'react';
import axios from 'axios';
import SignUp from './components/screens/authentication/SignUp';
import Login from './components/screens/authentication/Login';
import ForgetPassword from './components/screens/authentication/ForgetPassword';
import Recovery from './components/screens/authentication/Recovery';
import OTP from './components/screens/authentication/OTP';
import HomePage from './components/screens/HomePage';
import ProductPage from './components/screens/productPage/ProductPage';
import CartPage from './components/screens/productPage/CartPage';
import ProductPageOverview from './components/screens/productPage/ProductPageOverview';
import UserAccount from './components/screens/userPage/UserAccount';
import UserOrder from './components/screens/userPage/UserOrder';
import UserOrderdetails from './components/screens/userPage/UserOrderdetails';
import UserSavedItems from './components/screens/userPage/UserSavedItems';
import UserAddressBook from './components/screens/userPage/UserAddressBook';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header2 from './components/layouts/Header2';
import PrivateRoute from "./components/PrivateRoute";

type MyPaymentMetadata = {};

type AuthResult = {
  accessToken: string,
  user: {
    uid: string,
    username: string
  }
};



export type User = AuthResult['user'];

interface PaymentDTO {
  amount: number,
  user_uid: string,
  created_at: string,
  identifier: string,
  metadata: Object,
  memo: string,
  status: {
    developer_approved: boolean,
    transaction_verified: boolean,
    developer_completed: boolean,
    cancelled: boolean,
    user_cancelled: boolean,
  },
  to_address: string,
  transaction: null | {
    txid: string,
    verified: boolean,
    _link: string,
  },
};

// Make TS accept the existence of our window.__ENV object - defined in index.html:
interface WindowWithEnv extends Window {
  __ENV?: {
    backendURL: string, // REACT_APP_BACKEND_URL environment variable
    sandbox: "true" | "false", // REACT_APP_SANDBOX_SDK environment variable - string, not boolean!
  }
}

const _window: WindowWithEnv = window;
const backendURL = _window.__ENV && _window.__ENV.backendURL;

const axiosClient = axios.create({ baseURL: `${backendURL}`, timeout: 20000, withCredentials: true});
const config = {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}};


const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const signIn = async () => {
    const scopes = ['username', 'payments'];
    const authResult: AuthResult = await window.Pi.authenticate(scopes, onIncompletePaymentFound);
    signInUser(authResult);
    setUser(authResult.user);
  }

  const signOut = () => {
    setUser(null);
    signOutUser();
  }

  const signInUser = (authResult: AuthResult) => {
    axiosClient.post('/user/signin', {authResult});
    return setShowModal(false);
  }

  const signOutUser = () => {
    return axiosClient.get('/user/signout');
  }

  const onModalClose = () => {
    setShowModal(false);
  }

  const orderProduct = async (memo: string, amount: number, paymentMetadata: MyPaymentMetadata) => {
    if(user === null) {
      return setShowModal(true);
    }
    const paymentData = { amount, memo, metadata: paymentMetadata };
    const callbacks = {
      onReadyForServerApproval,
      onReadyForServerCompletion,
      onCancel,
      onError
    };
    const payment = await window.Pi.createPayment(paymentData, callbacks);
    console.log(payment);
  }

  const onIncompletePaymentFound = (payment: PaymentDTO) => {
    console.log("onIncompletePaymentFound", payment);
    return axiosClient.post('/payments/incomplete', {payment});
  }

  const onReadyForServerApproval = (paymentId: string) => {
    console.log("onReadyForServerApproval", paymentId);
    axiosClient.post('/payments/approve', {paymentId}, config);
  }

  const onReadyForServerCompletion = (paymentId: string, txid: string) => {
    console.log("onReadyForServerCompletion", paymentId, txid);
    axiosClient.post('/payments/complete', {paymentId, txid}, config);
  }

  const onCancel = (paymentId: string) => {
    console.log("onCancel", paymentId);
    return axiosClient.post('/payments/cancelled_payment', {paymentId});
  }

  const onError = (error: Error, payment?: PaymentDTO) => {
    console.log("onError", error);
    if (payment) {
      console.log(payment);
      // handle the error accordingly
    }
  }


  return (
    <>
      <Router>
        {/* <Header2 user={user} onSignIn={signIn} onSignOut={signOut} /> */}
        {/* <Header2 /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/store/:id" element={<ProductPage />} />
          {/* <Route path="/cart/:id?" element={<CartPage onClickBuy={orderProduct} />} /> */}
          {/* <PrivateRoute path="/cart/:id?" element={(props) => <CartPage {...props} onClickBuy={orderProduct} />} /> */}
          {/* <PrivateRoute
          path="/cart/:id?"
          element={<CartPage onClickBuy={orderProduct} />}
        /> */}
          <Route element={<PrivateRoute />}>
          <Route path="/cart/:id?" element={<CartPage onClickBuy={orderProduct} />} />
          </Route>
          <Route path="/product/:id" element={<ProductPageOverview />} />
          <Route path="/user/account" element={<UserAccount />} />
          <Route path="/user/order" element={<UserOrder />} />
          <Route path="/user/order/details" element={<UserOrderdetails />} />
          <Route path="/user/saveditems" element={<UserSavedItems />} />
          <Route path="/user/addressbook" element={<UserAddressBook />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
