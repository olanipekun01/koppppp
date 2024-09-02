import React from "react";

const StarRating = (rating) => {
    return (
        <>
            {[...Array(5)].map((_, index) => (
                <span key={index}>
                    <Star filled={rating > index} />
                </span>
            ))}
        </>
    )
}