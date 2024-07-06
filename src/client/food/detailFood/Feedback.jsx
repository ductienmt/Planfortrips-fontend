import React from "react";
import styles from "./feedback.module.css";

export function Feedback() {
  const showImage = (src) => {
    const fullscreenImage = document.getElementById("fullscreen-image");
    const fullscreenImageSrc = document.getElementById("fullscreen-image-src");

    fullscreenImageSrc.src = src;
    fullscreenImage.classList.add(styles.show);
  };

  const closeFullscreenImage = () => {
    const fullscreenImage = document.getElementById("fullscreen-image");
    fullscreenImage.classList.remove(styles.show);
  };

  const voteData = [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ];

  return (
    <main className={styles.productSame}>
      <div className={styles.container}>
        <div className={styles.voucherContent}>
          <div className={`${styles.voucherHeader} ${styles.voteClIcon}`}>
            <h2>Đánh giá sản phẩm</h2>
          </div>
          <div className={styles.voteHeader}>
            <div className={styles.voteData}>
              <div className={styles.voteNumber}>
                <div className={styles.voteNumberContent}>
                  <span>4.5</span>
                  <span>/ 5</span>
                </div>
                <ul className={styles.voteStar}>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star-half-stroke" />
                  </li>
                </ul>
                <span className={styles.numberVote}>(3 đánh giá)</span>
              </div>
              <div className={styles.voteProcess}>
                {voteData.map((vote) => (
                  <div className={styles.voteProcessItem} key={vote.stars}>
                    <span>{vote.stars} sao</span>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progress}
                        style={{ width: `${vote.percentage}%` }}
                      />
                    </div>
                    <span>{vote.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.voteBody}>
           <hr />
            <div className={styles.voteList}>
              <div className={`${styles.voteItem} ${styles.pt0}`}>
                <div className={styles.voteUser}>
                  <img
                    alt=""
                    className={styles.voteUserAvatar}
                  />
                  <div className={styles.voteName}>
                    <b>Lê Anh Tú</b>
                    <div className={styles.voteTime}>
                      <i>06/07/2024</i>
                      <i>09:55</i>
                    </div>
                  </div>
                </div>
                <div className={styles.voteText}>
                  <ul className={`${styles.voteStar} ${styles.flStart}`}>
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                  </ul>
                  <p style={{fontSize:'15px',fontWeight:'600'}}>
                   Tôi muốn được ăn nhiều hơn, ụt ụt.... 🐷🍔.
                  </p>
                  <ul className={styles.voteImg}>
                    <li>
                      <img
                        src="https://media-cdn.tripadvisor.com/media/photo-p/2c/b3/6c/bf/caption.jpg"
                        alt="img"
                        onClick={() =>
                          showImage("https://media-cdn.tripadvisor.com/media/photo-p/2c/b3/6c/bf/caption.jpg")
                        }
                      />
                    </li>
                    <li>
                      <img
                        src="https://media-cdn.tripadvisor.com/media/photo-p/2c/b3/6c/c0/caption.jpg"
                        alt="img"
                        onClick={() =>
                          showImage("https://media-cdn.tripadvisor.com/media/photo-p/2c/b3/6c/c0/caption.jpg")
                        }
                      />
                    </li>
                  </ul>
                  <div className={styles.voteInterac}>
                    <button className={styles.voteLike} tabIndex={0}>
                      <i className="fa-solid fa-thumbs-up" />
                      <span>Thích</span>
                      <span>(2)</span>
                    </button>
                    <button className={styles.voteReport}>
                      <i className="fa-solid fa-circle-info" />
                      <span>Báo cáo</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Additional vote items */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}