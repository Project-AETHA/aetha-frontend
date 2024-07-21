import React from 'react';

function getReviewMessage(review_score) {
    if (review_score > 4.5) {
        return { icon: "🤩", message: "Overwhelmingly Positive" };
    } else if (review_score > 4) {
        return { icon: "😊", message: "Very Positive" };
    } else if (review_score > 3) {
        return { icon: "🙂", message: "Positive" };
    } else if (review_score > 2) {
        return { icon: "😐", message: "Mixed" };
    } else if (review_score > 1) {
        return { icon: "😟", message: "Negative" };
    } else {
        return { icon: "😢", message: "Very Negative" };
    }
}

export default function OverallReview({ review_score, font_size = "text-medium" }) {
    const { icon, message } = getReviewMessage(review_score);

    return (
        <div className={`
            ${font_size} 
            flex items-center gap-2
            bg-foreground-100/25 text-white
            rounded 
            py-1 px-2
        `}>
            <span>{icon}</span>
            <span>{message}</span>
        </div>
    );
}