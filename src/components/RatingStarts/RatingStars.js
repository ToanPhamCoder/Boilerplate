import React from 'react'
import * as S from './ratingStars.style'

export default function RatingStars() {
  return (
    <div>
      {Array(5)
        .fill(0)
        .map((item, index) => (
          <S.RatingStarsContainer key={index}>
            {Array(5)
              .fill(0)
              .map((start, indexStar) => {
                if (indexStar < 5 - index) {
                  return (
                    <svg
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x={0}
                      y={0}
                      className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                      stroke="#FFD211"
                      key={indexStar}
                    >
                      <polygon
                        fill="#FFD211"
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                      />
                    </svg>
                  )
                }
                return (
                  <svg
                    enableBackground="new 0 0 15 15"
                    viewBox="0 0 15 15"
                    x={0}
                    y={0}
                    className="shopee-svg-icon icon-rating"
                    key={indexStar}
                    stroke="#FFD211"
                  >
                    <polygon
                      fill="none"
                      points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                    />
                  </svg>
                )
              })}
            {index !== 0 && 'trở lên'}
          </S.RatingStarsContainer>
        ))}
    </div>
  )
}
