/* Tailwind Configuration */
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
        }
      }
    }
  }
};

/* =========================================================
   1) APP STATE & MOCK DATA (MULTI-CLASS & ACCOUNTS)
========================================================= */

// User accounts with RBAC: Default Admin account. Students register their own accounts.
let accounts = [
  { hoTen: "Quản trị viên Hệ thống", maSV: "ADMIN", lop: "ALL", username: "admin123", password: "123456", role: "admin" }
];

let currentUser = null; // Currently logged in user object
let selectedClass = "ALL"; // Filter class: "ALL" or "ICT1.01", "ICT1.02", ...
let sortKey = "name";
let sortDir = 1;
let deleteTargetId = null;

// List of students across multiple classes (ICT1.01 - ICT1.05) with 50-70 students per class
function generateMockStudents() {
  const classesConfig = [
    { id: "ICT1.01", codePrefix: "251020901", count: 58 },
    { id: "ICT1.02", codePrefix: "251020902", count: 64 },
    { id: "ICT1.03", codePrefix: "251020903", count: 52 },
    { id: "ICT1.04", codePrefix: "251020904", count: 66 },
    { id: "ICT1.05", codePrefix: "251020905", count: 83 },
    { id: "ICT1.06", codePrefix: "251020906", count: 60 },
    { id: "ICT1.07", codePrefix: "251020907", count: 55 }
  ];

  const lnames = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Vũ", "Võ", "Đặng", "Bùi", "Đỗ", "Hồ", "Dương", "Đàm", "Cao", "Lý", "Đinh", "Trịnh"];
  const mnamesNam = ["Văn", "Huy", "Thành", "Đức", "Minh", "Quốc", "Trung", "Gia", "Bảo", "Đăng", "Tiến", "Hữu", "Hoàng", "Duy", "Công", "Trí", "Đình"];
  const mnamesNu = ["Thị", "Phương", "Thu", "Ngọc", "Thanh", "Khánh", "Mỹ", "Bích", "Như", "Ánh", "Linh", "Hồng", "Tuyết", "Mai"];
  const fnamesNam = ["Anh", "Bách", "Cường", "Dương", "Đạt", "Đức", "Hiệp", "Hoàng", "Huy", "Hưng", "Khang", "Khánh", "Kiên", "Long", "Nam", "Phúc", "Quân", "Sơn", "Thắng", "Thịnh", "Tiến", "Toàn", "Tú", "Tuấn", "Vinh", "Khôi", "Bảo", "Lâm", "Hải"];
  const fnamesNu = ["An", "Bích", "Châu", "Dung", "Hà", "Hằng", "Hoa", "Hương", "Huyền", "Lan", "Linh", "Ly", "Mai", "Ngân", "Ngọc", "Nhi", "Nhung", "Phương", "Quyên", "Thảo", "Trang", "Trinh", "Tú", "Vân", "Yến", "Thúy", "Quỳnh"];

  let result = [];
  let currentId = 1;

  // Real complete student roster for ICT1.05 transcribed directly from class list photos
  const presetICT105 = [
    {code:"251020904304", lname:"Đỗ Tuấn", fname:"Anh", dob:"2007-10-18", gender:"Nam", score:5.72, gpa:2.12, status:"Đang học"},
    {code:"251020904836", lname:"Nguyễn Đức", fname:"Cường", dob:"2007-08-06", gender:"Nam", score:7.55, gpa:3.02, status:"Đang học"},
    {code:"251020905099",  lname:"Nguyễn Bá Tùng", fname:"Anh", dob:"2007-10-04", gender:"Nam", score:9.52, gpa:3.89, status:"Đang học"},
    {code:"251020904319", lname:"Nguyễn Ngọc", fname:"Anh", dob:"2007-10-16", gender:"Nam", score:5.79, gpa:2.30, status:"Đang học"},
    {code:"251020904394", lname:"Nguyễn Việt", fname:"Anh", dob:"2007-02-05", gender:"Nam", score:5.90, gpa:2.59, status:"Đang học"},
    {code:"251020905543", lname:"Vũ Nam", fname:"Anh", dob:"2007-09-09", gender:"Nam", score:8.46, gpa:3.34, status:"Đang học"},
    {code:"251020905004", lname:"Đỗ Quang", fname:"Bách", dob:"2007-11-04", gender:"Nam", score:7.96, gpa:3.36, status:"Đang học"},
    {code:"251020905362", lname:"Nguyễn Tiến", fname:"Bảo", dob:"2007-12-18", gender:"Nam", score:6.72, gpa:2.66, status:"Đang học"},
    {code:"251020907172", lname:"Đỗ Mạnh", fname:"Chiến", dob:"2007-07-15", gender:"Nam", score:9.08, gpa:3.36, status:"Nghỉ phép"},
    {code:"251020905785", lname:"Dương Công", fname:"Chính", dob:"2007-02-07", gender:"Nam", score:9.34, gpa:3.78, status:"Đang học"},
    {code:"251020905686", lname:"Nguyễn Trung", fname:"Dương", dob:"2007-01-25", gender:"Nam", score:8.77, gpa:3.63, status:"Đang học"},
    {code:"251020905247", lname:"Nguyễn Đức", fname:"Dương", dob:"2007-02-13", gender:"Nam", score:5.01, gpa:2.21, status:"Đang học"},
    {code:"251020904208", lname:"Nguyễn Hoàng", fname:"Dương", dob:"2007-04-12", gender:"Nam", score:7.15, gpa:2.85, status:"Đang học"},
    {code:"251020904283", lname:"Lưu Tiến", fname:"Duy", dob:"2007-08-19", gender:"Nam", score:6.30, gpa:2.45, status:"Đang học"},
    {code:"251020905215", lname:"Bùi Khánh", fname:"Đoàn", dob:"2007-05-05", gender:"Nam", score:5.64, gpa:2.41, status:"Đang học"},
    {code:"251020904951", lname:"Cao Trí", fname:"Đạt", dob:"2007-05-26", gender:"Nam", score:4.73, gpa:1.87, status:"Đang học"},
    {code:"251020907451", lname:"Vũ Tiến", fname:"Đạt", dob:"2007-09-12", gender:"Nam", score:8.10, gpa:3.20, status:"Đang học"},
    {code:"251020907149", lname:"Ngô Tiến", fname:"Đạt", dob:"2007-11-20", gender:"Nam", score:6.80, gpa:2.70, status:"Đang học"},
    {code:"251020904981", lname:"Trần Quang", fname:"Định", dob:"2007-03-14", gender:"Nam", score:7.40, gpa:3.00, status:"Đang học"},
    {code:"251020905603", lname:"Hoàng Minh", fname:"Hải", dob:"2007-06-11", gender:"Nam", score:8.50, gpa:3.40, status:"Đang học"},
    {code:"251020906423", lname:"Nguyễn Văn", fname:"Hải", dob:"2007-07-22", gender:"Nam", score:6.90, gpa:2.75, status:"Đang học"},
    {code:"251020304872", lname:"Nguyễn Đức", fname:"Hải", dob:"2007-10-09", gender:"Nam", score:7.80, gpa:3.10, status:"Đang học"},
    {code:"251020905689", lname:"Nguyễn Hoàng", fname:"Hải", dob:"2007-12-05", gender:"Nam", score:8.30, gpa:3.30, status:"Đang học"},
    {code:"251020907478", lname:"Phan Trí", fname:"Hào", dob:"2007-01-18", gender:"Nam", score:7.20, gpa:2.90, status:"Đang học"},
    {code:"251020905659", lname:"Vũ Hoàng", fname:"Hiệp", dob:"2007-04-25", gender:"Nam", score:6.03, gpa:2.16, status:"Đang học"},
    {code:"251020905438", lname:"Nguyễn Trọng", fname:"Hiếu", dob:"2007-05-15", gender:"Nam", score:8.60, gpa:3.50, status:"Đang học"},
    {code:"251020904719", lname:"Vũ Huy", fname:"Hoàng", dob:"2007-03-24", gender:"Nam", score:5.04, gpa:2.16, status:"Đang học"},
    {code:"251020906394", lname:"Ngô Việt", fname:"Hoàng", dob:"2007-08-30", gender:"Nam", score:7.90, gpa:3.15, status:"Đang học"},
    {code:"251020905984", lname:"Nguyễn Huy", fname:"Hoàng", dob:"2007-09-14", gender:"Nam", score:8.45, gpa:3.42, status:"Đang học"},
    {code:"251020905563", lname:"Nguyễn Bá", fname:"Hùng", dob:"2007-02-18", gender:"Nam", score:6.75, gpa:2.65, status:"Đang học"},
    {code:"251020905931", lname:"Bùi Duy", fname:"Hưng", dob:"2007-02-19", gender:"Nam", score:6.74, gpa:2.41, status:"Đang học"},
    {code:"251020907284", lname:"Phạm Gia", fname:"Huy", dob:"2007-06-19", gender:"Nam", score:5.52, gpa:1.95, status:"Thôi học"},
    {code:"251020906501", lname:"Đặng Gia", fname:"Huy", dob:"2007-07-21", gender:"Nam", score:8.80, gpa:3.55, status:"Đang học"},
    {code:"251020904970", lname:"Phan Mạnh Gia", fname:"Huy", dob:"2007-08-11", gender:"Nam", score:7.60, gpa:3.05, status:"Đang học"},
    {code:"251020904491", lname:"Đinh Công", fname:"Huy", dob:"2007-09-02", gender:"Nam", score:6.40, gpa:2.50, status:"Đang học"},
    {code:"251020905755", lname:"Bùi Phú", fname:"Huy", dob:"2007-11-15", gender:"Nam", score:8.10, gpa:3.25, status:"Đang học"},
    {code:"251020907471", lname:"Nguyễn Bảo", fname:"Khang", dob:"2007-09-25", gender:"Nam", score:9.39, gpa:4.00, status:"Đang học"},
    {code:"251020904639", lname:"Đỗ Tuấn", fname:"Khanh", dob:"2007-03-29", gender:"Nam", score:7.70, gpa:3.10, status:"Đang học"},
    {code:"251020906397", lname:"Võ Văn Quốc", fname:"Khánh", dob:"2007-04-16", gender:"Nam", score:8.25, gpa:3.30, status:"Đang học"},
    {code:"251020905621", lname:"Phan Văn", fname:"Khải", dob:"2007-05-18", gender:"Nam", score:7.35, gpa:2.95, status:"Đang học"},
    {code:"251020905771", lname:"Vũ Lê", fname:"Kiên", dob:"2007-04-14", gender:"Nam", score:8.56, gpa:3.52, status:"Đang học"},
    {code:"251020905576", lname:"Nguyễn Trung", fname:"Kiên", dob:"2007-07-03", gender:"Nam", score:7.43, gpa:3.17, status:"Đang học"},
    {code:"251020905680", lname:"Nguyễn Duy", fname:"Kiên", dob:"2007-09-28", gender:"Nam", score:9.49, gpa:3.90, status:"Đang học"},
    {code:"251020906325", lname:"Ngô Sỹ", fname:"Kiên", dob:"2007-10-12", gender:"Nam", score:8.05, gpa:3.22, status:"Đang học"},
    {code:"251020905209", lname:"Ninh Đức", fname:"Khoa", dob:"2007-11-08", gender:"Nam", score:7.90, gpa:3.15, status:"Đang học"},
    {code:"251020906269", lname:"Nguyễn Anh", fname:"Khoa", dob:"2007-12-01", gender:"Nam", score:8.70, gpa:3.48, status:"Đang học"},
    {code:"251020904602", lname:"Hoàng Ngọc", fname:"Linh", dob:"2007-03-05", gender:"Nữ", score:8.00, gpa:3.47, status:"Đang học"},
    {code:"251020905687", lname:"Hán Tiến", fname:"Long", dob:"2007-04-03", gender:"Nam", score:7.10, gpa:2.80, status:"Đang học"},
    {code:"251020904434", lname:"Vũ Huy", fname:"Long", dob:"2007-06-25", gender:"Nam", score:6.85, gpa:2.70, status:"Đang học"},
    {code:"251020905692", lname:"Lê Phương", fname:"Ly", dob:"2007-06-04", gender:"Nữ", score:6.06, gpa:2.22, status:"Đang học"},
    {code:"251020906498", lname:"Tráng Ngọc", fname:"Minh", dob:"2007-08-14", gender:"Nam", score:8.35, gpa:3.35, status:"Đang học"},
    {code:"251020905891", lname:"Tống Đại", fname:"Nam", dob:"2007-01-09", gender:"Nam", score:7.65, gpa:3.08, status:"Đang học"},
    {code:"251020905676", lname:"Nguyễn Đình", fname:"Nam", dob:"2007-03-17", gender:"Nam", score:8.15, gpa:3.28, status:"Đang học"},
    {code:"251020906695", lname:"Nguyễn Thành", fname:"Nam", dob:"2007-05-23", gender:"Nam", score:6.95, gpa:2.78, status:"Đang học"},
    {code:"251020905507", lname:"Cáp Trọng", fname:"Nguyên", dob:"2007-07-07", gender:"Nam", score:8.90, gpa:3.60, status:"Đang học"},
    {code:"251020906586", lname:"Mai Minh", fname:"Nhật", dob:"2007-09-19", gender:"Nam", score:7.55, gpa:3.02, status:"Đang học"},
    {code:"251020907320", lname:"Hà Quang", fname:"Nhật", dob:"2007-10-28", gender:"Nam", score:8.65, gpa:3.50, status:"Đang học"},
    {code:"251020904999", lname:"Nguyễn Đình", fname:"Phúc", dob:"2007-02-14", gender:"Nam", score:7.85, gpa:3.12, status:"Đang học"},
    {code:"251020906846", lname:"Ngô Huy", fname:"Phương", dob:"2007-04-19", gender:"Nam", score:8.40, gpa:3.38, status:"Đang học"},
    {code:"251020904842", lname:"Nguyên Tuấn", fname:"Phương", dob:"2007-06-30", gender:"Nam", score:7.25, gpa:2.90, status:"Đang học"},
    {code:"251020904204", lname:"Vũ Đình Minh", fname:"Phương", dob:"2007-08-08", gender:"Nam", score:8.75, gpa:3.52, status:"Đang học"},
    {code:"251020905033", lname:"Trần Anh", fname:"Quân", dob:"2007-09-15", gender:"Nam", score:7.95, gpa:3.18, status:"Đang học"},
    {code:"251020906431", lname:"Nguyễn Quý Hoàng", fname:"Quân", dob:"2007-11-03", gender:"Nam", score:9.10, gpa:3.75, status:"Đang học"},
    {code:"251020905683", lname:"Nguyễn Hồng", fname:"Sơn", dob:"2007-01-22", gender:"Nam", score:6.60, gpa:2.60, status:"Đang học"},
    {code:"251020904695", lname:"Phạm Văn", fname:"Sơn", dob:"2007-03-11", gender:"Nam", score:7.75, gpa:3.10, status:"Đang học"},
    {code:"251020905417", lname:"Đỗ Minh", fname:"Tân", dob:"2007-05-04", gender:"Nam", score:8.00, gpa:3.20, status:"Đang học"},
    {code:"251020904238", lname:"Lê Thế", fname:"Tân", dob:"2007-07-29", gender:"Nam", score:7.30, gpa:2.92, status:"Đang học"},
    {code:"251020905905", lname:"Nguyễn Danh", fname:"Thái", dob:"2007-09-16", gender:"Nam", score:8.85, gpa:3.58, status:"Đang học"},
    {code:"251020906662", lname:"Nguyễn Đức", fname:"Thắng", dob:"2007-10-05", gender:"Nam", score:7.65, gpa:3.05, status:"Đang học"},
    {code:"251020906731", lname:"Cấn Cao", fname:"Thắng", dob:"2007-11-24", gender:"Nam", score:8.20, gpa:3.28, status:"Đang học"},
    {code:"251020905232", lname:"Đàm Thanh", fname:"Thảo", dob:"2007-06-05", gender:"Nữ", score:6.59, gpa:2.36, status:"Thôi học"},
    {code:"251020904646", lname:"Trần Ngọc", fname:"Thành", dob:"2007-02-08", gender:"Nam", score:8.50, gpa:3.40, status:"Đang học"},
    {code:"251020904789", lname:"Đặng Công", fname:"Thành", dob:"2007-04-17", gender:"Nam", score:7.45, gpa:2.98, status:"Đang học"},
    {code:"251020906959", lname:"Nguyễn Phúc", fname:"Thịnh", dob:"2007-08-25", gender:"Nam", score:8.95, gpa:3.62, status:"Đang học"},
    {code:"251020907490", lname:"Bùi Trung", fname:"Tín", dob:"2007-10-14", gender:"Nam", score:7.80, gpa:3.12, status:"Đang học"},
    {code:"251020905940", lname:"Nguyễn Quý", fname:"Trọng", dob:"2007-02-13", gender:"Nam", score:8.96, gpa:3.63, status:"Đang học"},
    {code:"251020906571", lname:"Bùi Chí", fname:"Trung", dob:"2007-05-19", gender:"Nam", score:8.10, gpa:3.25, status:"Đang học"},
    {code:"251020904391", lname:"Nguyễn Trí", fname:"Trung", dob:"2007-07-27", gender:"Nam", score:7.50, gpa:3.00, status:"Đang học"},
    {code:"251020904897", lname:"Hoàng Công", fname:"Tuân", dob:"2007-09-08", gender:"Nam", score:8.30, gpa:3.32, status:"Đang học"},
    {code:"251020904329", lname:"Trần Ngọc", fname:"Văn", dob:"2007-11-16", gender:"Nam", score:7.20, gpa:2.88, status:"Đang học"},
    {code:"251020905760", lname:"Nguyễn Quang", fname:"Vinh", dob:"2007-01-30", gender:"Nam", score:8.60, gpa:3.45, status:"Đang học"},
    {code:"251020904737", lname:"Trương Quang", fname:"Vinh", dob:"2007-03-21", gender:"Nam", score:7.85, gpa:3.15, status:"Đang học"},
    {code:"251020905956", lname:"Bùi Anh", fname:"Vũ", dob:"2007-06-12", gender:"Nam", score:8.05, gpa:3.22, status:"Đang học"}
  ];

  classesConfig.forEach(cls => {
    let presetCount = 0;
    if (cls.id === "ICT1.05") {
      presetICT105.forEach((st) => {
        result.push({
          id: currentId++,
          code: st.code,
          lname: st.lname,
          fname: st.fname,
          classId: cls.id,
          dob: st.dob,
          gender: st.gender,
          email: `${st.code}@st.phenikaa-uni.edu.vn`,
          score: st.score,
          gpa: st.gpa,
          status: st.status
        });
        presetCount++;
      });
    }

    for (let i = presetCount + 1; i <= cls.count; i++) {
      const isFemale = (currentId * 13) % 100 < 35;
      const gender = isFemale ? "Nữ" : "Nam";
      const lname = lnames[(currentId * 7) % lnames.length];
      const mname = isFemale ? mnamesNu[(currentId * 3) % mnamesNu.length] : mnamesNam[(currentId * 5) % mnamesNam.length];
      const fname = isFemale ? fnamesNu[(currentId * 11) % fnamesNu.length] : fnamesNam[(currentId * 13) % fnamesNam.length];

      const code = `${cls.codePrefix}${String(i).padStart(3, '0')}`;
      const m = String(((i * 3) % 12) + 1).padStart(2, '0');
      const d = String(((i * 7) % 28) + 1).padStart(2, '0');
      const dob = `2007-${m}-${d}`;
      const email = `${code}@st.phenikaa-uni.edu.vn`;

      // Score between 4.50 and 9.80
      const baseScore = 4.8 + ((currentId * 17) % 51) / 10;
      const score = +baseScore.toFixed(2);
      
      let gpa = +(score * 0.4 + (((currentId * 3) % 10) - 5) / 50).toFixed(2);
      if (gpa > 4.0) gpa = 4.00;
      if (gpa < 1.0) gpa = 1.00;

      let status = "Đang học";
      if (i % 17 === 0) status = "Thôi học";
      else if (i % 9 === 0) status = "Nghỉ phép";

      result.push({
        id: currentId++,
        code,
        lname: `${lname} ${mname}`,
        fname,
        classId: cls.id,
        dob,
        gender,
        email,
        score,
        gpa,
        status
      });
    }
  });

  return result;
}

let students = generateMockStudents();
let nextStudentId = 1000;
let chartInstance = null;

// Helper: Initials and Avatar Colors
function getInitials(lname, fname) {
  const l = lname ? lname.trim().charAt(0).toUpperCase() : '';
  const f = fname ? fname.trim().charAt(0).toUpperCase() : '';
  return l + f;
}

const avatarColors = [
  'bg-teal-600', 'bg-rose-600', 'bg-amber-600', 'bg-emerald-600', 
  'bg-indigo-600', 'bg-blue-600', 'bg-purple-600', 'bg-pink-600', 'bg-cyan-600'
];

function getAvatarBg(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return avatarColors[Math.abs(hash) % avatarColors.length];
}

/* =========================================================
   2) AUTHENTICATION & ROLE-BASED ACCESS CONTROL (RBAC)
========================================================= */

function tryLogin() {
  const u = document.getElementById('loginUser').value.trim();
  const p = document.getElementById('loginPass').value;
  const errBox = document.getElementById('loginError');

  const acc = accounts.find(a => a.username.toLowerCase() === u.toLowerCase() && a.password === p);

  if (acc) {
    errBox.classList.add('hidden');
    currentUser = acc;

    // Apply RBAC Rules
    applyUserRoleSettings();

    // Fade out login modal
    const loginScreen = document.getElementById('login-screen');
    loginScreen.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => loginScreen.classList.add('hidden'), 300);

    // Show dashboard
    const dash = document.getElementById('dashboard');
    dash.classList.remove('hidden');

    renderDashboard();
    toast(`👋 Xin chào, ${acc.hoTen}! (${acc.role === 'admin' ? 'Quản trị viên' : 'Sinh viên ' + acc.lop})`);
  } else {
    errBox.textContent = "⚠️ Tên đăng nhập hoặc mật khẩu không chính xác";
    errBox.classList.remove('hidden');
  }
}

function applyUserRoleSettings() {
  const isStudent = currentUser.role === 'student';
  
  // Update User Header Info
  document.getElementById('userNameDisplay').textContent = currentUser.hoTen;
  document.getElementById('userAvatar').textContent = currentUser.hoTen.charAt(0).toUpperCase();

  const roleBadge = document.getElementById('roleBadge');
  const roleDetail = document.getElementById('userRoleDetail');
  const headerClassSelect = document.getElementById('classSelectHeader');
  const toolbarClassSelect = document.getElementById('filterClassToolbar');
  const adminActionGroup = document.getElementById('adminActionGroup');
  const studentBanner = document.getElementById('studentNoticeBanner');

  if (isStudent) {
    // STUDENT ROLE RESTRICTIONS
    roleBadge.textContent = "Sinh viên";
    roleBadge.className = "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider";
    roleDetail.textContent = `Quyền hạn: Chỉ xem dữ liệu Lớp ${currentUser.lop}`;

    // Lock class selector to student's registered class
    selectedClass = currentUser.lop;
    headerClassSelect.value = currentUser.lop;
    headerClassSelect.disabled = true;
    toolbarClassSelect.value = currentUser.lop;
    toolbarClassSelect.disabled = true;

    // Hide admin actions (e.g. Add Student)
    adminActionGroup.classList.add('hidden');

    // Show student banner
    studentBanner.classList.remove('hidden');
    document.getElementById('studentBannerName').textContent = currentUser.hoTen;
    document.getElementById('studentBannerClass').textContent = `Lớp ${currentUser.lop}`;
  } else {
    // ADMIN ROLE PERMISSIONS
    roleBadge.textContent = "Admin";
    roleBadge.className = "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider";
    roleDetail.textContent = "Quyền hạn: Quản lý & Chỉnh sửa tất cả các lớp";

    // Unlock class selector
    selectedClass = "ALL";
    headerClassSelect.value = "ALL";
    headerClassSelect.disabled = false;
    toolbarClassSelect.value = "ALL";
    toolbarClassSelect.disabled = false;

    // Show admin actions
    adminActionGroup.classList.remove('hidden');

    // Hide student banner
    studentBanner.classList.add('hidden');
  }
}

function switchForm(type) {
  const loginBox = document.getElementById('loginFormContainer');
  const regBox = document.getElementById('registerFormContainer');
  document.getElementById('loginError').classList.add('hidden');
  document.getElementById('registerError').classList.add('hidden');

  if (type === 'register') {
    loginBox.classList.add('hidden');
    regBox.classList.remove('hidden');
  } else {
    regBox.classList.add('hidden');
    loginBox.classList.remove('hidden');
  }
}

function registerAccount() {
  const hoTen = document.getElementById('regHoTen').value.trim();
  const maSV  = document.getElementById('regMaSV').value.trim();
  const lop   = document.getElementById('regLop').value;
  const gioiTinh = document.getElementById('regGender').value;
  const dob = document.getElementById('regDob').value;
  const user  = document.getElementById('regUser').value.trim();
  const pass  = document.getElementById('regPass').value;
  const pass2 = document.getElementById('regPass2').value;
  const errBox = document.getElementById('registerError');

  if (!hoTen || !maSV || !user || !pass) {
    errBox.textContent = "⚠️ Vui lòng nhập đầy đủ các thông tin bắt buộc";
    errBox.classList.remove('hidden');
    return;
  }
  if (pass !== pass2) {
    errBox.textContent = "⚠️ Mật khẩu nhập lại không khớp";
    errBox.classList.remove('hidden');
    return;
  }
  if (accounts.some(a => a.username.toLowerCase() === user.toLowerCase())) {
    errBox.textContent = "⚠️ Tên đăng nhập đã tồn tại trên hệ thống";
    errBox.classList.remove('hidden');
    return;
  }

  // Add to accounts
  accounts.push({ hoTen, maSV, lop, gender: gioiTinh, username: user, password: pass, role: "student" });
  
  // Auto register into student table if not existing
  if (!students.some(s => s.code === maSV)) {
    students.push({
      id: nextStudentId++,
      code: maSV,
      lname: hoTen.split(" ").slice(0,-1).join(" ") || "Nguyễn",
      fname: hoTen.split(" ").slice(-1)[0] || "An",
      classId: lop,
      dob: dob || "2007-01-01",
      gender: gioiTinh,
      email: `${maSV}@st.phenikaa-uni.edu.vn`,
      score: 7.50,
      gpa: 3.00,
      status: "Đang học"
    });
  }

  toast("✅ Đăng ký thành công! Hãy đăng nhập bằng tài khoản vừa tạo.");
  switchForm('login');
  document.getElementById('loginUser').value = user;
}

function logout() {
  currentUser = null;
  document.getElementById('dashboard').classList.add('hidden');
  const loginScreen = document.getElementById('login-screen');
  loginScreen.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
}

/* =========================================================
   3) DATA FILTERING & RENDERING LOGIC
========================================================= */

function onClassChange(val) {
  if (currentUser.role === 'student' && val !== currentUser.lop) {
    toast("⚠️ Sinh viên chỉ được quyền xem lớp của mình!");
    return;
  }
  selectedClass = val;
  document.getElementById('classSelectHeader').value = val;
  document.getElementById('filterClassToolbar').value = val;
  renderDashboard();
}

function renderDashboard() {
  // Update Class Pill
  document.getElementById('currentClassPill').textContent = selectedClass === "ALL" ? "Tất cả các lớp" : `Lớp: ${selectedClass}`;
  renderTable();
}

function getFilteredStudents() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  const g = document.getElementById('filterGender').value;
  const s = document.getElementById('filterStatus').value;
  const r = document.getElementById('filterRank').value;

  return students.filter(st => {
    // RBAC Class Filter
    const matchesClass = (selectedClass === "ALL") || (st.classId === selectedClass);
    const fullName = (st.lname + " " + st.fname).toLowerCase();
    const matchesQuery = !q || fullName.includes(q) || st.code.toLowerCase().includes(q) || st.email.toLowerCase().includes(q);
    const matchesGender = !g || st.gender === g;
    const matchesStatus = !s || st.status === s;
    const matchesRank   = !r || getRank(st.gpa) === r;

    return matchesClass && matchesQuery && matchesGender && matchesStatus && matchesRank;
  });
}

function renderTable() {
  let list = getFilteredStudents();

  // Vietnamese Name Sorting Logic: First sort by Tên (fname A-Z), then by Họ & Đệm (lname A-Z)
  list.sort((a, b) => {
    if (sortKey === 'name') {
      const cmpFname = a.fname.localeCompare(b.fname, 'vi');
      if (cmpFname !== 0) return cmpFname * sortDir;
      return a.lname.localeCompare(b.lname, 'vi') * sortDir;
    }
    let va = a[sortKey], vb = b[sortKey];
    if (typeof va === 'string') return va.localeCompare(vb, 'vi') * sortDir;
    return (va - vb) * sortDir;
  });

  // Update Stats
  updateStats(list);

  const tbody = document.getElementById('studentTableBody');
  const isStudent = currentUser.role === 'student';

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="12" class="py-12 text-center text-slate-400">
          <span class="text-3xl block mb-2">🔍</span>
          Không tìm thấy sinh viên nào phù hợp với bộ lọc
        </td>
      </tr>`;
    document.getElementById('tableCounterInfo').textContent = "Hiển thị 0 sinh viên";
    renderPodium([]);
    renderGradeChart([0,0,0,0,0]);
    return;
  }

  document.getElementById('tableCounterInfo').textContent = `Hiển thị ${list.length} / ${students.length} sinh viên`;

  tbody.innerHTML = list.map((st, i) => {
    const full = st.lname + " " + st.fname;
    const initials = getInitials(st.lname, st.fname);
    const avatarBg = getAvatarBg(full);
    const rk = getRank(st.gpa);
    const dob = st.dob ? st.dob.split("-").reverse().join("/") : "—";

    return `
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition text-slate-700 dark:text-slate-200">
        <td class="py-3 px-4 text-center font-bold text-slate-400 text-xs whitespace-nowrap">${i+1}</td>
        <td class="py-3 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400 text-xs whitespace-nowrap">${st.code}</td>
        <td class="py-3 px-4 font-semibold text-slate-900 dark:text-white whitespace-nowrap min-w-[210px]">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-full ${avatarBg} text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
              ${initials}
            </div>
            <span class="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm whitespace-nowrap">${full}</span>
          </div>
        </td>
        <td class="py-3 px-4 whitespace-nowrap">
          <span class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded text-[11px]">
            ${st.classId || 'ICT1.05'}
          </span>
        </td>
        <td class="py-3 px-4 hidden md:table-cell text-slate-500 text-xs whitespace-nowrap">${dob}</td>
        <td class="py-3 px-4 whitespace-nowrap">
          <span class="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100/70 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
            ${st.gender}
          </span>
        </td>
        <td class="py-3 px-4 hidden lg:table-cell text-slate-400 text-xs whitespace-nowrap">${st.email}</td>
        <td class="py-3 px-4 text-center font-bold whitespace-nowrap ${st.score >= 8.0 ? 'text-emerald-600' : 'text-blue-600'}">${st.score.toFixed(2)}</td>
        <td class="py-3 px-4 text-center font-extrabold text-slate-900 dark:text-white whitespace-nowrap">${st.gpa.toFixed(2)}</td>
        <td class="py-3 px-4 text-center text-xs text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap">
          ${rk}
        </td>
        <td class="py-3 px-4 text-center">
          <span class="${getStatusBadgeClass(st.status)}">
            ${st.status}
          </span>
        </td>
        <td class="py-3 px-4 text-center">
          <div class="flex items-center justify-center gap-1.5">
            <button onclick="viewTranscript(${st.id})" class="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-300" title="Xem bảng điểm">
              📜
            </button>
            ${!isStudent ? `
              <button onclick="openEditModal(${st.id})" class="p-1 text-amber-600 hover:text-amber-700 transition" title="Chỉnh sửa">
                ✏️
              </button>
              <button onclick="openDeleteModal(${st.id})" class="p-1 text-slate-500 hover:text-red-600 transition" title="Xóa">
                🗑️
              </button>
            ` : ''}
          </div>
        </td>
      </tr>
    `;
  }).join('');

  renderPodium(list);
}

function updateStats(list) {
  const total = list.length;
  const active = list.filter(s => s.status === 'Đang học').length;
  const leave = list.filter(s => s.status === 'Nghỉ phép').length;
  const nam = list.filter(s => s.gender === 'Nam').length;
  const nu = list.filter(s => s.gender === 'Nữ').length;
  const avg = total ? (list.reduce((acc,s) => acc + s.score, 0) / total).toFixed(2) : "0.00";

  document.getElementById('statTotal').textContent = total;
  document.getElementById('statActive').textContent = active;
  document.getElementById('statLeave').textContent = leave;
  document.getElementById('statGender').textContent = `${nam} / ${nu}`;
  document.getElementById('statAvgScore').textContent = avg;

  // Grade Chart Counts
  const xs = list.filter(s => getRank(s.gpa) === 'Xuất sắc').length;
  const g  = list.filter(s => getRank(s.gpa) === 'Giỏi').length;
  const k  = list.filter(s => getRank(s.gpa) === 'Khá').length;
  const tb = list.filter(s => getRank(s.gpa) === 'Trung bình').length;
  const y  = list.filter(s => getRank(s.gpa) === 'Yếu').length;

  renderGradeChart([xs, g, k, tb, y]);
}

/* =========================================================
   4) PODIUM & CHART ANALYTICS
========================================================= */

function renderPodium(list) {
  const podiumBox = document.getElementById('podiumContainer');
  const top3 = [...list].sort((a,b) => b.gpa - a.gpa).slice(0, 3);

  if (top3.length === 0) {
    podiumBox.innerHTML = `<p class="text-xs text-slate-400">Chưa có dữ liệu</p>`;
    return;
  }

  const medals = ["🥇", "🥈", "🥉"];
  const heights = ["h-20 bg-amber-400", "h-14 bg-slate-300 dark:bg-slate-600", "h-10 bg-amber-700/80"];
  const orders = ["order-2", "order-1", "order-3"];

  podiumBox.innerHTML = top3.map((st, i) => `
    <div class="flex flex-col items-center ${orders[i]} w-20">
      <span class="text-lg">${medals[i]}</span>
      <div class="w-full ${heights[i]} rounded-t-lg flex items-center justify-center font-bold text-slate-900 text-xs">
        ${st.gpa.toFixed(2)}
      </div>
      <span class="text-[11px] font-bold text-slate-800 dark:text-slate-200 mt-1 truncate max-w-full text-center">
        ${st.fname}
      </span>
      <span class="text-[10px] text-slate-400">${st.classId || 'ICT1.05'}</span>
    </div>
  `).join('');
}

function renderGradeChart(dataArr) {
  const ctx = document.getElementById('gradeDistributionChart').getContext('2d');
  
  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Xuất sắc', 'Giỏi', 'Khá', 'Trung bình', 'Yếu'],
      datasets: [{
        label: 'Số sinh viên',
        data: dataArr,
        backgroundColor: [
          '#10b981', // Emerald
          '#6366f1', // Indigo
          '#3b82f6', // Blue
          '#f59e0b', // Amber
          '#ef4444'  // Red
        ],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true, ticks: { precision: 0 } }
      }
    }
  });
}

/* =========================================================
   5) TRANSCRIPT & MODAL ACTIONS
========================================================= */

/* ---- Subjects (Bảng điểm môn học) helpers ---- */

function clampScore(v) {
  const n = parseFloat(v);
  if (isNaN(n)) return 0;
  return Math.min(10, Math.max(0, Math.round(n * 10) / 10));
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function gradePoint(letter) {
  switch (letter) {
    case 'A': return 4.0;
    case 'B': return 3.0;
    case 'C': return 2.0;
    case 'D': return 1.0;
    default:  return 0.0;
  }
}

// Trả về bảng điểm môn học thật của sinh viên; nếu chưa có, tự khởi tạo dựa trên điểm TB hiện có
// (chỉ chạy 1 lần cho mỗi sinh viên, sau đó Admin có thể chỉnh sửa tự do trong form)
function getOrCreateSubjects(st) {
  if (!st.subjects || !st.subjects.length) {
    st.subjects = [
      { name: "Lập trình Python & Ứng dụng", credit: 3, score: clampScore(st.score + 0.3) },
      { name: "Cấu trúc Dữ liệu & Giải thuật", credit: 4, score: clampScore(st.score - 0.2) },
      { name: "Cơ sở Dữ liệu", credit: 3, score: clampScore(st.score) },
      { name: "Mạng Máy Tính", credit: 3, score: clampScore(st.score + 0.1) },
      { name: "Tiếng Anh Chuyên Ngành", credit: 2, score: clampScore(st.score + 0.5) }
    ];
  }
  return st.subjects;
}

function renderSubjectRows(subjects) {
  const container = document.getElementById('subjectsContainer');
  container.innerHTML = '';
  (subjects || []).forEach(sub => addSubjectRow(sub.name, sub.credit, sub.score));
  recalcOverall();
}

function addSubjectRow(name = '', credit = 3, score = 8.0) {
  const container = document.getElementById('subjectsContainer');
  const row = document.createElement('div');
  row.className = 'grid grid-cols-12 gap-1.5 items-center px-3 py-1.5 subject-row';
  row.innerHTML = `
    <input type="text" value="${escapeHtml(name)}" placeholder="VD: Lập trình Python" class="col-span-6 bg-transparent text-xs text-slate-800 dark:text-slate-100 focus:outline-none border-b border-slate-200 dark:border-slate-700 focus:border-indigo-500 subj-name">
    <input type="number" min="1" max="6" step="1" value="${credit}" class="col-span-2 bg-transparent text-xs text-center text-slate-800 dark:text-slate-100 focus:outline-none border-b border-slate-200 dark:border-slate-700 focus:border-indigo-500 subj-credit">
    <input type="number" min="0" max="10" step="0.1" value="${score}" class="col-span-3 bg-transparent text-xs text-center font-semibold text-slate-800 dark:text-slate-100 focus:outline-none border-b border-slate-200 dark:border-slate-700 focus:border-indigo-500 subj-score">
    <button type="button" title="Xóa môn học" class="col-span-1 text-red-400 hover:text-red-600 text-sm text-center" onclick="removeSubjectRow(this)">✕</button>
  `;
  container.appendChild(row);

  row.querySelector('.subj-name').addEventListener('input', recalcOverall);
  row.querySelector('.subj-credit').addEventListener('input', recalcOverall);
  row.querySelector('.subj-score').addEventListener('input', recalcOverall);

  recalcOverall();
}

function removeSubjectRow(btn) {
  btn.closest('.subject-row').remove();
  recalcOverall();
}

function fillDefaultSubjects() {
  document.getElementById('subjectsContainer').innerHTML = '';
  const defaults = [
    { name: "Lập trình Python & Ứng dụng", credit: 3, score: 8.5 },
    { name: "Cấu trúc Dữ liệu & Giải thuật", credit: 4, score: 8.0 },
    { name: "Cơ sở Dữ liệu", credit: 3, score: 8.2 },
    { name: "Mạng Máy Tính", credit: 3, score: 8.3 },
    { name: "Tiếng Anh Chuyên Ngành", credit: 2, score: 8.8 }
  ];
  defaults.forEach(s => addSubjectRow(s.name, s.credit, s.score));
  toast("📋 Đã điền mẫu 5 môn học — bạn có thể chỉnh sửa tự do");
}

// Đọc danh sách môn học hiện có trong form (bỏ qua các dòng chưa nhập tên)
function getSubjectsFromForm() {
  const rows = document.querySelectorAll('#subjectsContainer .subject-row');
  const subjects = [];
  rows.forEach(row => {
    const name = row.querySelector('.subj-name').value.trim();
    const credit = parseFloat(row.querySelector('.subj-credit').value) || 0;
    const scoreRaw = row.querySelector('.subj-score').value;
    if (name && credit > 0 && scoreRaw !== '') {
      subjects.push({ name, credit, score: clampScore(scoreRaw) });
    }
  });
  return subjects;
}

// Tự động tính lại Điểm TB (10) và GPA (4.0) mỗi khi bảng môn học thay đổi
function recalcOverall() {
  const subjects = getSubjectsFromForm();
  const hint = document.getElementById('subjectsEmptyHint');
  const fScore = document.getElementById('fScore');
  const fGpa = document.getElementById('fGpa');

  if (!subjects.length) {
    hint.classList.remove('hidden');
    fScore.value = '';
    fGpa.value = '';
    return;
  }
  hint.classList.add('hidden');

  let totalCredit = 0, sumScore = 0, sumGpaPoint = 0;
  subjects.forEach(s => {
    totalCredit += s.credit;
    sumScore += s.score * s.credit;
    sumGpaPoint += gradePoint(getLetterScore(s.score)) * s.credit;
  });

  fScore.value = (totalCredit ? sumScore / totalCredit : 0).toFixed(2);
  fGpa.value = (totalCredit ? sumGpaPoint / totalCredit : 0).toFixed(2);
}

function viewTranscript(studentId) {
  const st = students.find(s => s.id === studentId);
  if (!st) return;

  document.getElementById('tStudentName').textContent = `${st.lname} ${st.fname}`;
  document.getElementById('tStudentSubTitle').textContent = `MSSV: ${st.code} | Lớp: ${st.classId || 'ICT1.05'}`;
  document.getElementById('tAvatar').textContent = st.fname.charAt(0).toUpperCase();
  document.getElementById('tCode').textContent = st.code;
  document.getElementById('tClass').textContent = st.classId || 'ICT1.05';
  
  const rk = getRank(st.gpa);
  document.getElementById('tRank').textContent = rk;
  document.getElementById('tOverallScore').textContent = st.score.toFixed(2);
  document.getElementById('tOverallGpa').textContent = st.gpa.toFixed(2);

  // Dữ liệu môn học thật do Admin nhập (tự khởi tạo lần đầu nếu sinh viên chưa có bảng điểm chi tiết)
  const subjects = getOrCreateSubjects(st);

  const tbody = document.getElementById('tSubjectsBody');
  if (!subjects.length) {
    tbody.innerHTML = `
      <tr>
        <td colspan="4" class="py-6 px-3 text-center text-slate-400 text-xs">
          Chưa có dữ liệu môn học chi tiết. Admin có thể bổ sung ở mục "Chỉnh sửa sinh viên".
        </td>
      </tr>`;
  } else {
    tbody.innerHTML = subjects.map(sub => {
      const sc = clampScore(sub.score);
      const letter = getLetterScore(sc);
      return `
        <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30">
          <td class="py-2 px-3 font-medium text-slate-800 dark:text-slate-200">${escapeHtml(sub.name)}</td>
          <td class="py-2 px-3 text-center text-slate-500">${sub.credit}</td>
          <td class="py-2 px-3 text-center font-bold text-slate-800 dark:text-slate-100">${sc.toFixed(1)}</td>
          <td class="py-2 px-3 text-center font-extrabold text-indigo-600 dark:text-indigo-400">${letter}</td>
        </tr>
      `;
    }).join('');
  }

  openModal('modalTranscript');
}


function viewMyTranscript() {
  if (!currentUser) return;
  const mySt = students.find(s => s.code === currentUser.maSV) || students[0];
  viewTranscript(mySt.id);
}

/* CRUD Operations for Admin */
function openAddModal() {
  document.getElementById('modalFormTitle').textContent = "Thêm Sinh Viên Mới";
  document.getElementById('editStudentId').value = "";
  document.getElementById('fCode').value = "25102090" + Math.floor(1000 + Math.random() * 9000);
  document.getElementById('fLname').value = "";
  document.getElementById('fFname').value = "";
  document.getElementById('fDob').value = "2007-01-01";
  document.getElementById('fGender').value = "Nam";
  document.getElementById('fClass').value = selectedClass === "ALL" ? "ICT1.05" : selectedClass;
  document.getElementById('fEmail').value = "";
  document.getElementById('fStatus').value = "Đang học";

  // Bảng môn học bắt đầu trống — Admin tự thêm hoặc dùng mẫu 5 môn ICT
  renderSubjectRows([]);

  openModal('modalForm');
}

function openEditModal(id) {
  const st = students.find(s => s.id === id);
  if (!st) return;

  document.getElementById('modalFormTitle').textContent = "Chỉnh Sửa Thông Tin Sinh Viên";
  document.getElementById('editStudentId').value = st.id;
  document.getElementById('fCode').value = st.code;
  document.getElementById('fLname').value = st.lname;
  document.getElementById('fFname').value = st.fname;
  document.getElementById('fClass').value = st.classId || "ICT1.05";
  document.getElementById('fDob').value = st.dob;
  document.getElementById('fGender').value = st.gender;
  document.getElementById('fEmail').value = st.email;
  document.getElementById('fStatus').value = st.status;

  // Nạp bảng môn học thật của sinh viên (tự khởi tạo nếu chưa có) — Điểm TB & GPA sẽ tự tính lại
  renderSubjectRows(getOrCreateSubjects(st));

  openModal('modalForm');
}

function saveStudent() {
  const editId = document.getElementById('editStudentId').value;
  const code = document.getElementById('fCode').value.trim();
  const lname = document.getElementById('fLname').value.trim();
  const fname = document.getElementById('fFname').value.trim();
  const classId = document.getElementById('fClass').value;
  const dob = document.getElementById('fDob').value;
  const gender = document.getElementById('fGender').value;
  const email = document.getElementById('fEmail').value.trim() || `${code}@st.phenikaa-uni.edu.vn`;
  const status = document.getElementById('fStatus').value;

  if (!code || !lname || !fname) {
    toast("⚠️ Vui lòng nhập đầy đủ các trường thông tin");
    return;
  }

  const subjects = getSubjectsFromForm();
  if (!subjects.length) {
    toast("⚠️ Vui lòng thêm ít nhất 1 môn học kèm điểm cho sinh viên");
    return;
  }

  const score = parseFloat(document.getElementById('fScore').value) || 0;
  const gpa = parseFloat(document.getElementById('fGpa').value) || 0;

  if (editId) {
    // Edit Existing
    const st = students.find(s => s.id == editId);
    if (st) {
      Object.assign(st, { code, lname, fname, classId, dob, gender, email, score, gpa, status, subjects });
      toast("✅ Đã cập nhật sinh viên thành công!");
    }
  } else {
    // Add New
    students.unshift({
      id: nextStudentId++,
      code, lname, fname, classId, dob, gender, email, score, gpa, status, subjects
    });
    toast("✅ Đã thêm sinh viên mới thành công!");
  }

  closeModal('modalForm');
  renderDashboard();
}

function openDeleteModal(id) {
  const st = students.find(s => s.id === id);
  if (!st) return;
  deleteTargetId = id;
  document.getElementById('delStudentName').textContent = `${st.lname} ${st.fname} (${st.code})`;
  openModal('modalDel');
}

function confirmDelete() {
  if (deleteTargetId) {
    students = students.filter(s => s.id !== deleteTargetId);
    toast("🗑️ Đã xóa sinh viên khỏi hệ thống");
    deleteTargetId = null;
    closeModal('modalDel');
    renderDashboard();
  }
}

/* =========================================================
   6) UTILITY HELPERS & EXPORT
========================================================= */

function getRank(gpa) {
  if (gpa >= 3.6) return "Xuất sắc";
  if (gpa >= 3.2) return "Giỏi";
  if (gpa >= 2.5) return "Khá";
  if (gpa >= 2.0) return "Trung bình";
  return "Yếu";
}

function getLetterScore(score) {
  if (score >= 8.5) return "A";
  if (score >= 7.0) return "B";
  if (score >= 5.5) return "C";
  if (score >= 4.0) return "D";
  return "F";
}

function getRankBadgeClass(rk) {
  switch (rk) {
    case "Xuất sắc": return "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300";
    case "Giỏi":     return "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300";
    case "Khá":      return "bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300";
    case "Trung bình": return "bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300";
    default:         return "bg-red-100 text-red-800 dark:bg-red-950/80 dark:text-red-300";
  }
}

function getStatusBadgeClass(st) {
  if (st === "Đang học") return "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60 border border-emerald-200/80 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap inline-block text-center";
  if (st === "Nghỉ phép") return "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60 border border-amber-200/80 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap inline-block text-center";
  return "bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800/60 border border-red-200/80 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap inline-block text-center";
}

function setSort(key) {
  if (sortKey === key) {
    sortDir *= -1;
  } else {
    sortKey = key;
    sortDir = 1;
  }
  renderTable();
}

function clearFilters() {
  document.getElementById('searchInput').value = "";
  document.getElementById('filterGender').value = "";
  document.getElementById('filterStatus').value = "";
  document.getElementById('filterRank').value = "";
  renderTable();
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  document.getElementById('themeIcon').textContent = isDark ? "☀️" : "🌙";
}

function togglePasswordVisibility(inputId, btn) {
  const inp = document.getElementById(inputId);
  inp.type = inp.type === 'password' ? 'text' : 'password';
}

function exportCSV() {
  const list = getFilteredStudents();
  const header = ["STT", "Mã SV", "Lớp", "Họ tên", "Ngày sinh", "Giới tính", "Email", "Điểm TB", "GPA", "Học lực", "Trạng thái"];
  const rows = list.map((s, i) => [
    i + 1, s.code, s.classId || "ICT1.05", `${s.lname} ${s.fname}`, s.dob, s.gender, s.email, s.score, s.gpa, getRank(s.gpa), s.status
  ]);

  const csvContent = "\uFEFF" + [header, ...rows].map(e => e.map(val => `"${val}"`).join(",")).join("\n");
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Danh_Sach_Sinh_Vien_${selectedClass}_2025.csv`;
  a.click();
  URL.revokeObjectURL(url);
  toast("📥 Đã tải xuống file CSV danh sách sinh viên!");
}

function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

let toastTimer = null;
function toast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
  }, 3000);
}