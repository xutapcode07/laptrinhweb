/**
 * 2026 Updated Administrative Divisions Data (2-Level Structure: Province -> Ward/Commune)
 * Reduced from 63 to 34 major administrative entities, matching recent reform resolutions.
 */
const ADMINISTRATIVE_DATA = [
    {
        province: "TP. Hồ Chí Minh",
        wards: [
            "Phường Thảo Điền", "Phường Bến Nghé", "Phường Bến Thành", "Phường Tân Định", 
            "Phường Linh Trung (Khu ĐHQG)", "Phường Linh Chiểu", "Phường Đông Hòa", "Phường Phú Hữu"
        ]
    },
    {
        province: "TP. Hà Nội",
        wards: [
            "Phường Dịch Vọng Hậu", "Phường Bách Khoa", "Phường Kim Liên", "Phường Định Công", 
            "Phường Mỹ Đình 1", "Phường Thượng Đình", "Phường Cống Vị", "Xã Hòa Lạc"
        ]
    },
    {
        province: "TP. Đà Nẵng",
        wards: [
            "Phường Hòa Khánh Bắc", "Phường Hải Châu I", "Phường Mỹ An", "Phường Khuê Trung", "Phường Phước Mỹ"
        ]
    },
    {
        province: "TP. Hải Phòng",
        wards: [
            "Phường Lê Lợi", "Phường Đằng Giang", "Phường Lách Tray", "Phường Quán Toan"
        ]
    },
    {
        province: "TP. Cần Thơ",
        wards: [
            "Phường Xuân Khánh", "Phường An Khánh", "Phường Cai Khè", "Phường Hưng Lợi"
        ]
    },
    {
        province: "Tỉnh Bình Dương",
        wards: [
            "Phường Phú Hòa", "Phường Chánh Nghĩa", "Phường Dĩ An", "Phường Đông Hòa"
        ]
    },
    {
        province: "Tỉnh Thừa Thiên Huế",
        wards: [
            "Phường Vĩnh Ninh", "Phường Phú Hội", "Phường Thủy Xuân", "Phường Hương Sơ"
        ]
    },
    {
        province: "Tỉnh Nghệ An",
        wards: [
            "Phường Trường Thi", "Phường Bến Thủy", "Phường Hưng Dũng", "Phường Vinh Tân"
        ]
    }
];

/**
 * Mock Initial Listings Database
 */
let sampleListings = [
    {
        id: "ITEM-001",
        title: "Máy tính bỏ túi Casio FX-580VN X",
        category: "dung-cu",
        type: "thue", // thue, muon, ban
        price: 15000,
        priceUnit: "/ ngày",
        deposit: 350000,
        originalPrice: 550000,
        condition: "Mới 98%",
        ownerName: "Nguyễn Thu Thảo",
        ownerSchool: "ĐH Bách Khoa",
        ownerRating: 4.9,
        ownerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        verified: true,
        province: "TP. Hồ Chí Minh",
        ward: "Phường Linh Trung (Khu ĐHQG)",
        schoolCode: "BK",
        image: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=500&h=400&fit=crop",
        desc: "Máy tính màu xanh đậm, mới mua kỳ trước, bấm phím siêu nhạy. Rất thích hợp cho các bạn thuê ngắn hạn thi kỳ môn Toán/Giải tích/Vật lý.",
        distanceKm: "0.8 km"
    },
    {
        id: "ITEM-002",
        title: "Bộ Giáo Trình Giải Tích 1, 2 & Đại Số Bách Khoa",
        category: "sach",
        type: "muon",
        price: 0,
        priceUnit: "Miễn phí",
        deposit: 50000,
        originalPrice: 220000,
        condition: "Đã dùng (Có ghi chú highlight)",
        ownerName: "Lê Hoàng Nam",
        ownerSchool: "ĐH Bách Khoa",
        ownerRating: 4.8,
        ownerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        verified: true,
        province: "TP. Hà Nội",
        ward: "Phường Bách Khoa",
        schoolCode: "BK",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=400&fit=crop",
        desc: "Mình đã thi xong môn này nên cho các bạn khóa dưới mượn lại 0đ dùng suốt học kỳ. Chỉ cần giữ gìn cẩn thận không xé trang.",
        distanceKm: "1.2 km"
    },
    {
        id: "ITEM-003",
        title: "Nồi cơm điện Supor 1.8L cho phòng trọ",
        category: "gia-dung",
        type: "ban",
        price: 180000,
        priceUnit: "Thanh lý",
        deposit: 0,
        originalPrice: 450000,
        condition: "Mới 85%",
        ownerName: "Trần Bảo Ngọc",
        ownerSchool: "ĐH Kinh tế (UEH)",
        ownerRating: 4.6,
        ownerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        verified: true,
        province: "TP. Hồ Chí Minh",
        ward: "Phường Bến Thành",
        schoolCode: "UEH",
        image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=500&h=400&fit=crop",
        desc: "Nồi dùng tốt, nấu nhanh chín, không dính đáy. Ra trường về quê nên cần thanh lý gấp giá học sinh.",
        distanceKm: "2.5 km"
    },
    {
        id: "ITEM-004",
        title: "Tai nghe chống ồn Sony WH-1000XM4",
        category: "dien-tu",
        type: "thue",
        price: 45000,
        priceUnit: "/ ngày",
        deposit: 1500000,
        originalPrice: 6500000,
        condition: "Mới 99%",
        ownerName: "Đặng Minh Trí",
        ownerSchool: "ĐH Quốc Gia",
        ownerRating: 4.9,
        ownerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        verified: true,
        province: "TP. Hồ Chí Minh",
        ward: "Phường Thảo Điền",
        schoolCode: "DHQG",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop",
        desc: "Cho thuê tập trung học thi ôn thi cuối kỳ, chống ồn tuyệt đối. Đầy đủ túi đựng và dây cáp.",
        distanceKm: "3.1 km"
    },
    {
        id: "ITEM-005",
        title: "Trang phục Lễ Tốt Nghiệp Cử Nhân / Kỹ Sư",
        category: "thoi-trang",
        type: "thue",
        price: 50000,
        priceUnit: "/ ngày",
        deposit: 200000,
        originalPrice: 800000,
        condition: "Mới 95% đã giặt ủi",
        ownerName: "Phạm Khánh Linh",
        ownerSchool: "ĐH Kinh tế Quốc Dân",
        ownerRating: 4.7,
        ownerAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
        verified: true,
        province: "TP. Hà Nội",
        ward: "Phường Dịch Vọng Hậu",
        schoolCode: "NEU",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=400&fit=crop",
        desc: "Áo cử nhân kèm nón & dải ruy băng. Thích hợp cho các bạn chụp ảnh kỷ yếu mùa tốt nghiệp.",
        distanceKm: "1.5 km"
    }
];

/**
 * Active Escrow Contracts Mock Data
 */
let sampleContracts = [
    {
        id: "HD-8842",
        itemName: "Máy tính Casio FX-580VN X",
        partner: "Nguyễn Thu Thảo",
        dates: "12/08 - 15/08/2026",
        lockedAmount: 350000,
        status: "Đang giữ cọc",
        statusColor: "bg-amber-100 text-amber-800 border-amber-200"
    },
    {
        id: "HD-7210",
        itemName: "Tai nghe Sony WH-1000XM4",
        partner: "Đặng Minh Trí",
        dates: "01/08 - 05/08/2026",
        lockedAmount: 1500000,
        status: "Đã hoàn thành & Trả cọc",
        statusColor: "bg-emerald-100 text-emerald-800 border-emerald-200"
    }
];

/**
 * State Variables
 */
let userBalance = 500000;
let userVerified = false;
let currentCategoryFilter = "all";
let selectedItemForModal = null;
let activeChatPartner = "Nguyễn Thu Thảo";
let savedItems = new Set();

// Initialize UI on window load
window.onload = function() {
    populateLocationDropdowns();
    renderListings();
    renderContracts();
    setupChatList();
    updateBalanceDisplay();
    updateSavedBadge();
    updateAuthUI();
};

/**
 * Populate Administrative Locations (Level 1: Province & Level 2: Ward)
 */
function populateLocationDropdowns() {
    const filterProv = document.getElementById("filter-province");
    const headProv = document.getElementById("header-province");
    const postProv = document.getElementById("post-province");

    ADMINISTRATIVE_DATA.forEach(item => {
        const opt1 = new Option(item.province, item.province);
        const opt2 = new Option(item.province, item.province);
        const opt3 = new Option(item.province, item.province);
        filterProv.add(opt1);
        headProv.add(opt2);
        postProv.add(opt3);
    });
}

function onProvinceChange() {
    const provName = document.getElementById("filter-province").value;
    const wardSelect = document.getElementById("filter-ward");
    wardSelect.innerHTML = '<option value="">Tất cả Xã/Phường</option>';

    if (!provName) {
        wardSelect.disabled = true;
    } else {
        wardSelect.disabled = false;
        const target = ADMINISTRATIVE_DATA.find(x => x.province === provName);
        if (target) {
            target.wards.forEach(w => {
                wardSelect.add(new Option(w, w));
            });
        }
    }
    renderListings();
}

function onPostProvinceChange() {
    const provName = document.getElementById("post-province").value;
    const wardSelect = document.getElementById("post-ward");
    wardSelect.innerHTML = '<option value="">-- Chọn Xã / Phường --</option>';

    if (!provName) {
        wardSelect.disabled = true;
    } else {
        wardSelect.disabled = false;
        const target = ADMINISTRATIVE_DATA.find(x => x.province === provName);
        if (target) {
            target.wards.forEach(w => {
                wardSelect.add(new Option(w, w));
            });
        }
    }
}

function onHeaderProvinceChange() {
    const val = document.getElementById("header-province").value;
    document.getElementById("filter-province").value = val;
    onProvinceChange();
}

/**
 * Filter & Search Functions
 */
function setCategoryFilter(cat) {
    currentCategoryFilter = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        const isActive = btn.dataset.cat === cat;
        btn.classList.toggle('active', isActive);
        btn.classList.toggle('bg-brand-600', isActive);
        btn.classList.toggle('text-white', isActive);
        btn.classList.toggle('shadow-sm', isActive);
        btn.classList.toggle('bg-slate-100', !isActive);
        btn.classList.toggle('text-slate-700', !isActive);
    });
    renderListings();
}

/**
 * Jump into a category from the seasonal suggestion chips and scroll to results
 */
function setCategoryFilterFromChip(cat) {
    setCategoryFilter(cat);
    const grid = document.getElementById('listings-grid');
    if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('Đã lọc theo gợi ý mùa vụ!', 'info');
}

function handleSearch() {
    renderListings();
}

function syncAndSearchMobile(val) {
    document.getElementById("global-search").value = val;
    renderListings();
}

function resetFilters() {
    document.getElementById("global-search").value = "";
    document.getElementById("filter-deal-type").value = "all";
    document.getElementById("filter-province").value = "";
    document.getElementById("filter-ward").value = "";
    document.getElementById("filter-ward").disabled = true;
    document.getElementById("filter-school").value = "";
    currentCategoryFilter = "all";
    renderListings();
    showToast("Đã làm mới bộ lọc!", "info");
}

/**
 * Render Listings Grid
 */
function renderListings() {
    const grid = document.getElementById("listings-grid");
    const searchText = document.getElementById("global-search").value.toLowerCase();
    const dealType = document.getElementById("filter-deal-type").value;
    const provFilter = document.getElementById("filter-province").value;
    const wardFilter = document.getElementById("filter-ward").value;
    const schoolFilter = document.getElementById("filter-school").value;

    let filtered = sampleListings.filter(item => {
        // Category check
        if (currentCategoryFilter !== 'all' && item.category !== currentCategoryFilter) return false;
        // Search text
        if (searchText && !item.title.toLowerCase().includes(searchText) && !item.desc.toLowerCase().includes(searchText)) return false;
        // Deal Type
        if (dealType !== 'all' && item.type !== dealType) return false;
        // Province & Ward
        if (provFilter && item.province !== provFilter) return false;
        if (wardFilter && item.ward !== wardFilter) return false;
        // School
        if (schoolFilter && item.schoolCode !== schoolFilter) return false;

        return true;
    });

    document.getElementById("listing-count").innerText = filtered.length;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-12 text-center bg-white rounded-2xl border border-slate-200">
                <i class="fa-solid fa-box-open text-4xl text-slate-300 mb-2"></i>
                <div class="font-bold text-slate-700 text-sm">Chưa tìm thấy món đồ phù hợp</div>
                <div class="text-xs text-slate-400 mt-1">Hãy thử mở rộng bán kính lọc hoặc đăng tin yêu cầu mới!</div>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(item => {
        let badgeColor = "bg-brand-100 text-brand-800 border-brand-200";
        let badgeLabel = "Cho Thuê";
        if (item.type === 'muon') {
            badgeColor = "bg-indigo-100 text-indigo-800 border-indigo-200";
            badgeLabel = "Cho Mượn 0đ";
        } else if (item.type === 'ban') {
            badgeColor = "bg-amber-100 text-amber-800 border-amber-200";
            badgeLabel = "Thanh Lý";
        }

        const savingsPct = (item.originalPrice && item.originalPrice > item.price) ? Math.round((1 - item.price / item.originalPrice) * 100) : 0;
        const isSaved = savedItems.has(item.id);

        return `
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col group">
                <!-- Thumbnail -->
                <div class="relative aspect-4/3 overflow-hidden bg-slate-100 cursor-pointer" onclick="openProductModal('${item.id}')">
                    <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
                    <span class="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-md border ${badgeColor}">
                        ${badgeLabel}
                    </span>
                    <button onclick="event.stopPropagation(); toggleSaveItem('${item.id}')" class="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm hover:scale-110 transition" title="Lưu tin">
                        <i class="fa-${isSaved ? 'solid' : 'regular'} fa-heart text-[12px] ${isSaved ? 'text-rose-500' : 'text-slate-500'}"></i>
                    </button>
                    ${savingsPct > 0 ? `
                        <span class="absolute bottom-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500 text-white shadow-sm">
                            <i class="fa-solid fa-piggy-bank mr-1"></i>Tiết kiệm ${savingsPct}%
                        </span>
                    ` : ''}
                    <span class="absolute bottom-2 right-2 text-[10px] bg-slate-900/70 text-white backdrop-blur-sm px-2 py-0.5 rounded">
                        <i class="fa-solid fa-person-walking mr-1 text-emerald-400"></i>${item.distanceKm}
                    </span>
                </div>

                <!-- Body -->
                <div class="p-3.5 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                        <h3 class="font-bold text-xs text-slate-800 line-clamp-2 hover:text-brand-600 cursor-pointer" onclick="openProductModal('${item.id}')">
                            ${item.title}
                        </h3>
                        <div class="flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                            <i class="fa-solid fa-location-dot text-rose-500"></i>
                            <span class="truncate">${item.ward}, ${item.province}</span>
                        </div>
                    </div>

                    <div class="pt-2 border-t border-slate-100 space-y-2">
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="text-xs text-slate-400 block text-[10px]">Mức phí</span>
                                <span class="font-extrabold text-sm text-brand-700">${item.price > 0 ? item.price.toLocaleString('vi-VN') + 'đ' : '0đ'}</span>
                                <span class="text-[10px] text-slate-500">${item.priceUnit}</span>
                            </div>
                            ${item.deposit > 0 ? `
                                <div class="text-right">
                                    <span class="text-[9px] text-slate-400 block">Tiền cọc</span>
                                    <span class="text-xs font-semibold text-slate-600">${item.deposit.toLocaleString('vi-VN')}đ</span>
                                </div>
                            ` : ''}
                        </div>

                        <div class="flex items-center justify-between pt-1">
                            <div class="flex items-center gap-1.5 min-w-0">
                                <img src="${item.ownerAvatar}" class="w-5 h-5 rounded-full object-cover shrink-0">
                                <div class="min-w-0">
                                    <span class="text-[10px] font-medium text-slate-600 truncate block max-w-[90px]">${item.ownerName}</span>
                                    <span class="text-[9px] text-amber-500 font-semibold"><i class="fa-solid fa-star"></i> ${item.ownerRating || '5.0'}</span>
                                </div>
                            </div>
                            <button onclick="openProductModal('${item.id}')" class="px-2.5 py-1 bg-slate-100 hover:bg-brand-600 hover:text-white rounded-lg text-[10px] font-bold text-slate-700 transition">
                                Chi tiết
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Open Product Detail & Electronic Contract Modal
 */
function openProductModal(id) {
    const item = sampleListings.find(x => x.id === id);
    if (!item) return;
    selectedItemForModal = item;

    document.getElementById("modal-item-title").innerText = item.title;
    document.getElementById("modal-item-image").src = item.image;
    document.getElementById("modal-item-condition").innerText = `Tình trạng: ${item.condition}`;
    document.getElementById("modal-item-price").innerText = `${item.price > 0 ? item.price.toLocaleString('vi-VN') + 'đ' : '0đ'} ${item.priceUnit}`;
    document.getElementById("modal-item-deposit").innerText = `${item.deposit.toLocaleString('vi-VN')}đ`;
    document.getElementById("modal-owner-name").innerText = item.ownerName;
    document.getElementById("modal-owner-school").innerHTML = `<i class="fa-solid fa-graduation-cap"></i> ${item.ownerSchool}`;
    document.getElementById("modal-owner-rating").innerText = item.ownerRating || '5.0';
    document.getElementById("modal-owner-avatar").src = item.ownerAvatar;
    document.getElementById("modal-item-location").innerText = `${item.ward}, ${item.province}`;
    document.getElementById("modal-item-desc").innerText = item.desc;
    document.getElementById("modal-item-badge").innerText = item.type === 'thue' ? 'Cho Thuê' : (item.type === 'muon' ? 'Cho Mượn 0đ' : 'Thanh Lý');

    const savingsEl = document.getElementById("modal-item-savings");
    const savingsPct = (item.originalPrice && item.originalPrice > item.price) ? Math.round((1 - item.price / item.originalPrice) * 100) : 0;
    if (savingsPct > 0) {
        savingsEl.classList.remove('hidden');
        savingsEl.querySelector('span').innerText = `Tiết kiệm ${savingsPct}% so với giá mua mới (~${item.originalPrice.toLocaleString('vi-VN')}đ)`;
    } else {
        savingsEl.classList.add('hidden');
    }
    updateModalSaveButton();

    // Default dates
    const today = new Date();
    const nextThreeDays = new Date();
    nextThreeDays.setDate(today.getDate() + 3);

    document.getElementById("contract-start-date").value = today.toISOString().split('T')[0];
    document.getElementById("contract-end-date").value = nextThreeDays.toISOString().split('T')[0];

    calculateRentalTotal();
    openModal("modal-product");
}

function calculateRentalTotal() {
    if (!selectedItemForModal) return;
    const startStr = document.getElementById("contract-start-date").value;
    const endStr = document.getElementById("contract-end-date").value;

    if (!startStr || !endStr) return;
    const start = new Date(startStr);
    const end = new Date(endStr);
    const diffTime = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));

    let rentalFee = selectedItemForModal.price * diffTime;
    let total = rentalFee + selectedItemForModal.deposit;

    document.getElementById("contract-total-summary").innerText = `${total.toLocaleString('vi-VN')} VNĐ (Gồm ${rentalFee.toLocaleString('vi-VN')}đ phí + ${selectedItemForModal.deposit.toLocaleString('vi-VN')}đ cọc)`;
}

function confirmEscrowCheckout() {
    if (!selectedItemForModal) return;

    if (!isUserLoggedIn()) {
        openModal("modal-login-required");
        showToast("Bạn cần đăng nhập tài khoản để mua/thuê sản phẩm!", "error");
        return;
    }

    const startStr = document.getElementById("contract-start-date").value;
    const endStr = document.getElementById("contract-end-date").value;
    const start = new Date(startStr);
    const end = new Date(endStr);
    const days = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));
    const totalNeeded = (selectedItemForModal.price * days) + selectedItemForModal.deposit;

    if (userBalance < totalNeeded) {
        showToast(`Số dư ví Escrow không đủ! Cần thêm ${(totalNeeded - userBalance).toLocaleString('vi-VN')}đ. Nạp thêm ngay.`, "error");
        return;
    }

    userBalance -= totalNeeded;
    updateBalanceDisplay();

    // Add new active contract
    const newContract = {
        id: "HD-" + Math.floor(1000 + Math.random() * 9000),
        itemName: selectedItemForModal.title,
        partner: selectedItemForModal.ownerName,
        dates: `${startStr.split('-').reverse().slice(0,2).join('/')} - ${endStr.split('-').reverse().slice(0,2).join('/')}`,
        lockedAmount: totalNeeded,
        status: "Đã cọc - Chờ giao nhận đồ",
        statusColor: "bg-blue-100 text-blue-800 border-blue-200"
    };

    sampleContracts.unshift(newContract);
    renderContracts();
    closeModal("modal-product");
    showToast("Đã ký hợp đồng điện tử &amp; trích tiền cọc giữ an toàn tại Escrow!", "success");
    showSection("escrow");
}

/**
 * Render Contracts Table
 */
function renderContracts() {
    const tbody = document.getElementById("contracts-table-body");
    tbody.innerHTML = sampleContracts.map(c => `
        <tr>
            <td class="p-3 font-bold text-slate-800">${c.id}</td>
            <td class="p-3 font-medium text-slate-700">${c.itemName}</td>
            <td class="p-3 text-slate-600">${c.partner}</td>
            <td class="p-3 text-slate-500">${c.dates}</td>
            <td class="p-3 font-bold text-brand-700">${c.lockedAmount.toLocaleString('vi-VN')}đ</td>
            <td class="p-3">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold border ${c.statusColor}">${c.status}</span>
            </td>
            <td class="p-3 text-right space-x-1">
                <button onclick="showToast('Ảnh chụp xác nhận tình trạng giao đồ đã lưu!', 'info')" class="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded font-medium">Chụp ảnh đồ</button>
                <button onclick="showSection('chat')" class="px-2 py-1 bg-brand-50 text-brand-700 hover:bg-brand-100 rounded font-medium">Nhắn tin</button>
            </td>
        </tr>
    `).join('');

    let lockedSum = sampleContracts.reduce((acc, curr) => acc + curr.lockedAmount, 0);
    document.getElementById("escrow-locked-balance").innerText = `${lockedSum.toLocaleString('vi-VN')} VNĐ`;
}

/**
 * Wishlist / Saved Items
 */
function toggleSaveItem(id, fromModal) {
    if (savedItems.has(id)) {
        savedItems.delete(id);
        showToast("Đã bỏ lưu tin đăng.", "info");
    } else {
        savedItems.add(id);
        showToast("Đã lưu tin vào mục yêu thích!", "success");
    }
    updateSavedBadge();
    renderListings();
    if (fromModal) updateModalSaveButton();
    if (!document.getElementById("view-saved").classList.contains("hidden")) renderSavedView();
}

function updateModalSaveButton() {
    const btn = document.getElementById("modal-save-btn");
    if (!btn || !selectedItemForModal) return;
    const saved = savedItems.has(selectedItemForModal.id);
    btn.querySelector('i').className = saved ? 'fa-solid fa-heart mr-1 text-rose-500' : 'fa-regular fa-heart mr-1';
    btn.querySelector('span').innerText = saved ? 'Đã lưu' : 'Lưu tin';
}

function updateSavedBadge() {
    const badge = document.getElementById("saved-count-badge");
    if (!badge) return;
    if (savedItems.size > 0) {
        badge.textContent = savedItems.size;
        badge.classList.remove("hidden");
    } else {
        badge.classList.add("hidden");
    }
}

function renderSavedView() {
    const wrap = document.getElementById("saved-items-grid");
    const items = sampleListings.filter(i => savedItems.has(i.id));

    if (items.length === 0) {
        wrap.innerHTML = `
            <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-slate-200">
                <i class="fa-regular fa-heart text-4xl text-slate-300 mb-2"></i>
                <div class="font-bold text-slate-700 text-sm">Bạn chưa lưu tin nào</div>
                <div class="text-xs text-slate-400 mt-1">Bấm biểu tượng trái tim trên món đồ bạn thích để lưu lại đây.</div>
                <button onclick="showSection('home')" class="mt-4 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition">Khám phá đồ ngay</button>
            </div>
        `;
        return;
    }

    wrap.innerHTML = items.map(item => `
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col group">
            <div class="relative aspect-4/3 overflow-hidden bg-slate-100 cursor-pointer" onclick="openProductModal('${item.id}')">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
                <button onclick="event.stopPropagation(); toggleSaveItem('${item.id}')" class="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm hover:scale-110 transition">
                    <i class="fa-solid fa-heart text-[12px] text-rose-500"></i>
                </button>
            </div>
            <div class="p-3.5 space-y-2">
                <h3 class="font-bold text-xs text-slate-800 line-clamp-2 cursor-pointer hover:text-brand-600" onclick="openProductModal('${item.id}')">${item.title}</h3>
                <div class="flex items-center justify-between pt-1">
                    <span class="font-extrabold text-sm text-brand-700">${item.price > 0 ? item.price.toLocaleString('vi-VN') + 'đ' : '0đ'} <span class="text-[10px] font-normal text-slate-400">${item.priceUnit}</span></span>
                    <button onclick="openProductModal('${item.id}')" class="px-2.5 py-1 bg-slate-100 hover:bg-brand-600 hover:text-white rounded-lg text-[10px] font-bold text-slate-700 transition">Xem lại</button>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Handle Post New Item
 */
function handleCreatePost(e) {
    e.preventDefault();
    const title = document.getElementById("post-title").value;
    const cat = document.getElementById("post-category").value;
    const price = parseInt(document.getElementById("post-price").value) || 0;
    const deposit = parseInt(document.getElementById("post-deposit").value) || 0;
    const prov = document.getElementById("post-province").value;
    const ward = document.getElementById("post-ward").value;
    const desc = document.getElementById("post-desc").value;
    const customImg = document.getElementById("post-image-url").value;
    const type = document.querySelector('input[name="post_type"]:checked').value;

    const newItem = {
        id: "ITEM-" + Date.now(),
        title: title,
        category: cat,
        type: type,
        price: price,
        priceUnit: type === 'thue' ? '/ ngày' : (type === 'muon' ? 'Miễn phí' : 'Bán'),
        deposit: deposit,
        originalPrice: 0,
        condition: "Mới 95%",
        ownerName: "Bạn (Tôi)",
        ownerSchool: "ĐH Bách Khoa",
        ownerRating: 5.0,
        ownerAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
        verified: true,
        province: prov,
        ward: ward,
        schoolCode: "BK",
        image: customImg || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=400&fit=crop",
        desc: desc,
        distanceKm: "0.1 km"
    };

    sampleListings.unshift(newItem);
    renderListings();
    closeModal("modal-new-post");
    document.getElementById("form-new-post").reset();
    showToast("Đăng tin thành công! Món đồ của bạn đã hiển thị công khai trên PassBorrow.", "success");
}

/**
 * Student Verification Form
 */
function handleVerifyStudent(e) {
    e.preventDefault();
    userVerified = true;
    document.getElementById("header-verify-status").innerText = "Đã Xác Thực SV";
    closeModal("modal-verify");
    showToast("Chúc mừng! Tài khoản của bạn đã đạt Huy hiệu Xác Thực Sinh Viên.", "success");
}

/**
 * Navigation View Switching
 */
function showSection(viewName) {
    document.getElementById("view-home").classList.add("hidden");
    document.getElementById("view-escrow").classList.add("hidden");
    document.getElementById("view-chat").classList.add("hidden");
    document.getElementById("view-saved").classList.add("hidden");

    document.getElementById(`view-${viewName}`).classList.remove("hidden");
    if (viewName === "saved") renderSavedView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Escrow Top up / Withdraw Mock Actions
 */
function topUpBalance() {
    userBalance += 200000;
    updateBalanceDisplay();
    showToast("Đã nạp 200.000 VNĐ vào Ví Escrow qua mã QR Chuyển khoản!", "success");
}

function withdrawBalance() {
    if (userBalance <= 0) {
        showToast("Số dư khả dụng bằng 0đ!", "error");
        return;
    }
    const amount = userBalance;
    userBalance = 0;
    updateBalanceDisplay();
    showToast(`Đã rút ${amount.toLocaleString('vi-VN')}đ về tài khoản Ngân hàng liên kết.`, "info");
}

function updateBalanceDisplay() {
    document.getElementById("user-balance-display").innerText = `${userBalance.toLocaleString('vi-VN')}đ`;
    document.getElementById("escrow-available-balance").innerText = `${userBalance.toLocaleString('vi-VN')} VNĐ`;
}

/**
 * In-App Chat Functions
 */
function setupChatList() {
    const list = document.getElementById("chat-thread-list");
    list.innerHTML = `
        <div class="p-3 flex items-center gap-3 bg-brand-50 border-l-4 border-brand-600 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" class="w-9 h-9 rounded-full object-cover">
            <div class="flex-1 overflow-hidden">
                <div class="flex items-center justify-between">
                    <span class="font-bold text-xs text-slate-800">Nguyễn Thu Thảo</span>
                    <span class="text-[9px] text-slate-400">10:42</span>
                </div>
                <div class="text-[11px] text-brand-700 truncate font-medium">Chốt mượn từ 12/08 đến 15/08 nhé!</div>
            </div>
        </div>
        <div class="p-3 flex items-center gap-3 hover:bg-slate-100 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" class="w-9 h-9 rounded-full object-cover">
            <div class="flex-1 overflow-hidden">
                <div class="flex items-center justify-between">
                    <span class="font-bold text-xs text-slate-800">Lê Hoàng Nam</span>
                    <span class="text-[9px] text-slate-400">Hôm qua</span>
                </div>
                <div class="text-[11px] text-slate-500 truncate">Bộ sách còn đẹp lắm bạn nhé...</div>
            </div>
        </div>
    `;

    document.getElementById("chat-messages-body").innerHTML = `
        <div class="text-center text-[10px] text-slate-400 py-2">--- Lịch sử tin nhắn bảo mật PassBorrow ---</div>
        <div class="flex items-end gap-2">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" class="w-6 h-6 rounded-full object-cover">
            <div class="bg-white border border-slate-200 rounded-2xl p-3 max-w-xs text-xs text-slate-700 shadow-sm">
                Chào bạn, mình muốn thuê máy tính Casio trong 3 ngày thi môn Giải tích 1.
            </div>
        </div>
        <div class="flex items-end gap-2 justify-end">
            <div class="bg-brand-600 text-white rounded-2xl p-3 max-w-xs text-xs shadow-sm">
                Chào bạn! Máy sẵn sàng nhé. Bạn chọn ngày rồi bấm nút "Lập Hợp Đồng Thuê" góc trên giúp mình để giữ cọc trung gian nhé.
            </div>
        </div>
    `;
}

function sendChatMessage() {
    const input = document.getElementById("chat-input-field");
    const msg = input.value.trim();
    if (!msg) return;

    const body = document.getElementById("chat-messages-body");
    body.innerHTML += `
        <div class="flex items-end gap-2 justify-end">
            <div class="bg-brand-600 text-white rounded-2xl p-3 max-w-xs text-xs shadow-sm">
                ${msg}
            </div>
        </div>
    `;
    input.value = "";
    body.scrollTop = body.scrollHeight;
}

function startChatFromModal() {
    if (!isUserLoggedIn()) {
        openModal("modal-login-required");
        showToast("Vui lòng đăng nhập tài khoản để nhắn tin và thuê đồ!", "error");
        return;
    }
    closeModal("modal-product");
    showSection("chat");
}

function openContractPreviewFromChat() {
    if (selectedItemForModal) {
        openProductModal(selectedItemForModal.id);
    } else {
        openProductModal("ITEM-001");
    }
}

/**
 * Footer Newsletter Signup (mock)
 */
function handleNewsletterSignup(e) {
    e.preventDefault();
    e.target.reset();
    showToast("Đã đăng ký nhận thông báo mùa vụ qua email!", "success");
}

/**
 * Back-to-top button visibility
 */
window.addEventListener("scroll", function() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;
    btn.classList.toggle("hidden", window.scrollY < 500);
});

/**
 * Modal Helpers & Notification Toast System
 */
function openModal(id) {
    document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
    document.getElementById(id).classList.add("hidden");
}

function openNewListingModal() {
    if (!isUserLoggedIn()) {
        openModal("modal-login-required");
        showToast("Vui lòng đăng nhập tài khoản để đăng tin sản phẩm!", "error");
        return;
    }
    openModal("modal-new-post");
}

function openVerificationModal() {
    openModal("modal-verify");
}

function openTermsModal() {
    openModal("modal-terms");
}

function showToast(message, type = 'info') {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");

    let bgColor = "bg-slate-800 text-white";
    let icon = "fa-circle-info";

    if (type === 'success') {
        bgColor = "bg-brand-700 text-white";
        icon = "fa-circle-check";
    } else if (type === 'error') {
        bgColor = "bg-rose-600 text-white";
        icon = "fa-triangle-exclamation";
    }

    toast.className = `pointer-events-auto p-3.5 rounded-xl shadow-xl ${bgColor} flex items-center gap-3 text-xs font-semibold transform transition duration-300 translate-y-2 opacity-0`;
    toast.innerHTML = `<i class="fa-solid ${icon} text-base"></i> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove("translate-y-2", "opacity-0");
    }, 10);

    setTimeout(() => {
        toast.classList.add("opacity-0");
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

/**
 * Authentication & Account Settings System
 */
function isUserLoggedIn() {
    return localStorage.getItem('passborrow_is_logged_in') === 'true';
}

function getUserName() {
    const storedName = localStorage.getItem('passborrow_user_name');
    const storedPhone = localStorage.getItem('passborrow_user_phone') || '';

    if (storedPhone === '0912345678' || storedName === 'Admin' || storedName === 'admin') {
        return 'Admin';
    }

    return storedName || 'Admin';
}

function updateAuthUI() {
    const loggedIn = isUserLoggedIn();
    const userName = getUserName();
    const statusCard = document.getElementById("logo-user-status-card");
    const loginBtn = document.getElementById("logo-login-btn");
    const logoutBtn = document.getElementById("logo-logout-btn");

    if (loggedIn) {
        if (statusCard) {
            statusCard.innerHTML = `
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-full bg-brand-600 text-white font-bold flex items-center justify-center text-sm shadow">
                        ${userName.charAt(0).toUpperCase()}
                    </div>
                    <div class="overflow-hidden">
                        <div class="font-bold text-xs text-slate-800 truncate">${userName}</div>
                        <div class="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Đã đăng nhập
                        </div>
                    </div>
                </div>
            `;
        }
        if (loginBtn) loginBtn.classList.add("hidden");
        if (logoutBtn) logoutBtn.classList.remove("hidden");
    } else {
        if (statusCard) {
            statusCard.innerHTML = `
                <div class="flex items-center gap-2.5 text-slate-600">
                    <div class="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm shrink-0">
                        <i class="fa-solid fa-eye"></i>
                    </div>
                    <div>
                        <div class="font-bold text-xs text-slate-700">Chế độ Xem Sản Phẩm</div>
                        <div class="text-[10px] text-amber-600 font-medium">Cần đăng nhập để mua/thuê</div>
                    </div>
                </div>
            `;
        }
        if (loginBtn) loginBtn.classList.remove("hidden");
        if (logoutBtn) logoutBtn.classList.add("hidden");
    }
}

function toggleLogoMenu(e) {
    if (e) e.stopPropagation();
    const menu = document.getElementById("logo-dropdown-menu");
    const chevron = document.getElementById("logo-chevron");
    if (!menu) return;
    const isHidden = menu.classList.contains("hidden");
    if (isHidden) {
        menu.classList.remove("hidden");
        if (chevron) chevron.classList.add("rotate-180");
    } else {
        menu.classList.add("hidden");
        if (chevron) chevron.classList.remove("rotate-180");
    }
}

// Close logo menu when clicking outside
document.addEventListener("click", function(e) {
    const trigger = document.getElementById("logo-trigger");
    const menu = document.getElementById("logo-dropdown-menu");
    if (menu && !menu.classList.contains("hidden")) {
        if (trigger && !trigger.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.add("hidden");
            const chevron = document.getElementById("logo-chevron");
            if (chevron) chevron.classList.remove("rotate-180");
        }
    }
});

function handleLogout() {
    localStorage.removeItem('passborrow_is_logged_in');
    localStorage.removeItem('passborrow_user_name');
    localStorage.removeItem('passborrow_user_phone');
    localStorage.removeItem('passborrow_user_email');
    localStorage.removeItem('passborrow_user_school');
    localStorage.removeItem('passborrow_user_student_id');
    localStorage.removeItem('passborrow_user_address');
    toggleLogoMenu();
    updateAuthUI();
    showToast("Đã đăng xuất tài khoản! Hiện tại bạn đang ở chế độ xem sản phẩm.", "info");
}

function openSettingsModal() {
    const userName = getUserName();
    document.getElementById("settings-name").value = userName;
    document.getElementById("settings-phone").value = localStorage.getItem('passborrow_user_phone') || "";
    document.getElementById("settings-email").value = localStorage.getItem('passborrow_user_email') || "";
    document.getElementById("settings-school").value = localStorage.getItem('passborrow_user_school') || "";
    document.getElementById("settings-student-id").value = localStorage.getItem('passborrow_user_student_id') || "";
    document.getElementById("settings-address").value = localStorage.getItem('passborrow_user_address') || "";
    switchSettingsTab('profile');
    openModal("modal-settings");
}

function switchSettingsTab(tab) {
    const profForm = document.getElementById("form-settings-profile");
    const passForm = document.getElementById("form-settings-password");
    const profBtn = document.getElementById("set-tab-profile-btn");
    const passBtn = document.getElementById("set-tab-password-btn");

    if (tab === 'profile') {
        profForm.classList.remove("hidden");
        passForm.classList.add("hidden");
        profBtn.className = "pb-2 text-brand-600 border-b-2 border-brand-600 font-bold";
        passBtn.className = "pb-2 text-slate-500 hover:text-slate-700 font-semibold";
    } else {
        profForm.classList.add("hidden");
        passForm.classList.remove("hidden");
        passBtn.className = "pb-2 text-brand-600 border-b-2 border-brand-600 font-bold";
        profBtn.className = "pb-2 text-slate-500 hover:text-slate-700 font-semibold";
    }
}

function saveProfileSettings(e) {
    e.preventDefault();
    const newName = document.getElementById("settings-name").value.trim();
    const phone = document.getElementById("settings-phone").value.trim();
    const email = document.getElementById("settings-email").value.trim();
    const school = document.getElementById("settings-school").value.trim();
    const studentId = document.getElementById("settings-student-id").value.trim();
    const address = document.getElementById("settings-address").value.trim();

    if (newName) localStorage.setItem('passborrow_user_name', newName);
    localStorage.setItem('passborrow_user_phone', phone);
    localStorage.setItem('passborrow_user_email', email);
    localStorage.setItem('passborrow_user_school', school);
    localStorage.setItem('passborrow_user_student_id', studentId);
    localStorage.setItem('passborrow_user_address', address);

    // Sync back to registered users database
    const currentPhone = localStorage.getItem('passborrow_user_phone');
    const data = localStorage.getItem('passborrow_users');
    if (data) {
        try {
            const users = JSON.parse(data);
            const userIdx = users.findIndex(u => u.phone === currentPhone || u.fullName === newName);
            if (userIdx !== -1) {
                if (newName) users[userIdx].fullName = newName;
                if (phone) users[userIdx].phone = phone;
                if (email) users[userIdx].email = email;
                localStorage.setItem('passborrow_users', JSON.stringify(users));
            }
        } catch (err) {}
    }

    updateAuthUI();
    closeModal("modal-settings");
    showToast("Đã cập nhật thông tin hồ sơ cá nhân thành công!", "success");
}

function savePasswordSettings(e) {
    e.preventDefault();
    const oldP = document.getElementById("settings-old-pass").value;
    const newP = document.getElementById("settings-new-pass").value;
    const confP = document.getElementById("settings-confirm-pass").value;

    if (newP !== confP) {
        showToast("Mật khẩu mới và mật khẩu xác nhận không trùng khớp!", "error");
        return;
    }
    if (newP.length < 6) {
        showToast("Mật khẩu mới phải từ 6 ký tự trở lên!", "error");
        return;
    }

    closeModal("modal-settings");
    document.getElementById("form-settings-password").reset();
    showToast("Đổi mật khẩu tài khoản thành công!", "success");
}