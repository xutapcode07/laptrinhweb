// ===================================================
// script.js - Các hiệu ứng đơn giản cho web Môn học
// ===================================================

document.addEventListener("DOMContentLoaded", function () {

    // ---------------------------------------------------
    // 1. Tự động highlight môn học đang được xem trên menu
    // ---------------------------------------------------
    // Lấy tên file hiện tại từ đường dẫn (ví dụ: "mon-toan.html")
    const trangHienTai = window.location.pathname.split("/").pop();

    // Lấy toàn bộ link trong menu điều hướng
    const cacLinkMenu = document.querySelectorAll("nav ul li a");

    cacLinkMenu.forEach(function (link) {
        const hrefLink = link.getAttribute("href");
        if (hrefLink === trangHienTai) {
            link.classList.add("active");
        }
    });

    // ---------------------------------------------------
    // 2. Thanh tiến trình cuộn trang (thanh màu chạy ở trên cùng)
    // ---------------------------------------------------
    const thanhTienTrinh = document.createElement("div");
    thanhTienTrinh.id = "scroll-progress";
    document.body.appendChild(thanhTienTrinh);

    function capNhatThanhTienTrinh() {
        const cuonHienTai = window.scrollY;
        const chieuCaoTrang = document.documentElement.scrollHeight - window.innerHeight;
        const phanTram = chieuCaoTrang > 0 ? (cuonHienTai / chieuCaoTrang) * 100 : 0;
        thanhTienTrinh.style.width = phanTram + "%";
    }

    window.addEventListener("scroll", capNhatThanhTienTrinh);
    capNhatThanhTienTrinh();

    // ---------------------------------------------------
    // 3. Nút "Lên đầu trang" - tự hiện khi cuộn xuống
    // ---------------------------------------------------
    const nutLenDau = document.createElement("button");
    nutLenDau.id = "back-to-top";
    nutLenDau.title = "Lên đầu trang";
    nutLenDau.innerHTML = "&uarr;"; // mũi tên lên
    document.body.appendChild(nutLenDau);

    // Hiện/ẩn nút tùy theo vị trí cuộn
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            nutLenDau.classList.add("show");
        } else {
            nutLenDau.classList.remove("show");
        }
    });

    // Khi bấm vào nút, cuộn mượt lên đầu trang
    nutLenDau.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // ---------------------------------------------------
    // 4. Hiệu ứng "nảy nhẹ" khi rê chuột vào tiêu đề h3
    // ---------------------------------------------------
    const tieuDeMonHoc = document.querySelector("main h3");
    if (tieuDeMonHoc) {
        tieuDeMonHoc.style.transition = "transform 0.2s ease";
        tieuDeMonHoc.addEventListener("mouseenter", function () {
            tieuDeMonHoc.style.transform = "scale(1.05)";
        });
        tieuDeMonHoc.addEventListener("mouseleave", function () {
            tieuDeMonHoc.style.transform = "scale(1)";
        });
    }

});