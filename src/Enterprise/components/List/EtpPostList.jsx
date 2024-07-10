import React, { useState } from 'react';

function EtpPostList() {
  const postsPerPage = 4; // Số bài đăng trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại, mặc định là trang đầu tiên

  // Dữ liệu bài đăng
  const posts = [
    {
      postId: 1,
      postTitle: "10 Best Places to Visit in Vietnam",
      postContent: "Vietnam is a beautiful country with diverse landscapes...",
      postAuthor: "John Doe",
      postTags: ["Vietnam", "Travel", "Destinations"],
      postDate: "2024-07-06"
    },
    {
      postId: 2,
      postTitle: "Guide to Vietnamese Cuisine",
      postContent: "Explore the rich flavors and dishes of Vietnamese cuisine...",
      postAuthor: "Jane Smith",
      postTags: ["Vietnamese Food", "Culture", "Recipes"],
      postDate: "2024-07-05"
    },
    {
      postId: 3,
      postTitle: "Top 5 Beaches in Vietnam",
      postContent: "Discover the stunning beaches along the coast of Vietnam...",
      postAuthor: "Mike Johnson",
      postTags: ["Beaches", "Vietnam", "Travel"],
      postDate: "2024-07-04"
    },
    {
      postId: 4,
      postTitle: "Historical Sites in Hanoi",
      postContent: "Explore the history and culture of Hanoi through its ancient sites...",
      postAuthor: "Emily Brown",
      postTags: ["Hanoi", "History", "Culture"],
      postDate: "2024-07-03"
    },
    {
      postId: 5,
      postTitle: "Must-Try Street Foods in Ho Chi Minh City",
      postContent: "Experience the vibrant street food scene in Ho Chi Minh City...",
      postAuthor: "David Wilson",
      postTags: ["Ho Chi Minh City", "Street Food", "Vietnamese Cuisine"],
      postDate: "2024-07-02"
    },
    {
      postId: 6,
      postTitle: "Exploring Ha Long Bay",
      postContent: "Cruise through the breathtaking landscapes of Ha Long Bay...",
      postAuthor: "Sophia Martinez",
      postTags: ["Ha Long Bay", "Vietnam", "Travel"],
      postDate: "2024-07-01"
    },
    {
      postId: 7,
      postTitle: "Traditional Festivals in Vietnam",
      postContent: "Celebrate Vietnam's rich cultural heritage through its festivals...",
      postAuthor: "Michael Lee",
      postTags: ["Vietnam", "Culture", "Festivals"],
      postDate: "2024-06-30"
    },
    {
      postId: 8,
      postTitle: "Shopping Guide in Hoi An",
      postContent: "Discover the best places to shop in the ancient town of Hoi An...",
      postAuthor: "Olivia Taylor",
      postTags: ["Hoi An", "Shopping", "Travel Tips"],
      postDate: "2024-06-29"
    },
    {
      postId: 9,
      postTitle: "Trekking in Sapa",
      postContent: "Experience the stunning landscapes of Sapa through trekking...",
      postAuthor: "Daniel Clark",
      postTags: ["Sapa", "Trekking", "Adventure"],
      postDate: "2024-06-28"
    },
    {
      postId: 10,
      postTitle: "Vietnam's Wildlife Sanctuaries",
      postContent: "Explore the biodiversity of Vietnam's wildlife sanctuaries...",
      postAuthor: "Sophie White",
      postTags: ["Wildlife", "Conservation", "Vietnam"],
      postDate: "2024-06-27"
    },
    {
      postId: 11,
      postTitle: "Art Scene in Hue",
      postContent: "Discover Hue's vibrant art scene and cultural heritage...",
      postAuthor: "William Anderson",
      postTags: ["Hue", "Art", "Culture"],
      postDate: "2024-06-26"
    },
    {
      postId: 12,
      postTitle: "Vietnam's Coffee Culture",
      postContent: "Learn about Vietnam's rich coffee culture and its famous brews...",
      postAuthor: "Lily Green",
      postTags: ["Coffee", "Vietnam", "Culture"],
      postDate: "2024-06-25"
    },
    {
      postId: 13,
      postTitle: "Motorbiking Adventures in Vietnam",
      postContent: "Embark on thrilling motorbike adventures across Vietnam...",
      postAuthor: "Jacob Brown",
      postTags: ["Motorbiking", "Adventure", "Vietnam"],
      postDate: "2024-06-24"
    },
    {
      postId: 14,
      postTitle: "Hidden Gems of Central Vietnam",
      postContent: "Discover lesser-known gems in central Vietnam worth exploring...",
      postAuthor: "Emma Thompson",
      postTags: ["Vietnam", "Travel", "Hidden Gems"],
      postDate: "2024-06-23"
    },
    {
      postId: 15,
      postTitle: "Water Sports in Nha Trang",
      postContent: "Enjoy exciting water sports activities in Nha Trang's beautiful beaches...",
      postAuthor: "Lucas Martin",
      postTags: ["Nha Trang", "Water Sports", "Beaches"],
      postDate: "2024-06-22"
    }
  ];

  // Tính số lượng trang
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Lấy chỉ mục của bài đăng đầu tiên và bài đăng cuối cùng của trang hiện tại
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Chuyển đổi trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <div className="row">
              {currentPosts.map((post) => (
                <div key={post.postId} className="col-md-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{post.postTitle}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{post.postAuthor}</h6>
                      <p className="card-text">{post.postContent}</p>
                      <span className="text-success me-3">{post.postDate}</span>
                      <a href="#" className="card-link">Chi tiết bài viết</a>
                      <a href="#" className="card-link">Xóa bài viết</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Nút chuyển trang */}
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default EtpPostList;
