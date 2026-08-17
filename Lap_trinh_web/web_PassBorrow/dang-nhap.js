function openTermsModal() {
            document.getElementById('terms-modal').classList.remove('hidden');
        }

        function closeTermsModal() {
            document.getElementById('terms-modal').classList.add('hidden');
        }
        // Tab switching logic
        function switchTab(tab) {
            const loginForm = document.getElementById('login-form-container');
            const registerForm = document.getElementById('register-form-container');
            const loginBtn = document.getElementById('tab-login-btn');
            const registerBtn = document.getElementById('tab-register-btn');

            if (tab === 'login') {
                loginForm.classList.remove('hidden');
                registerForm.classList.add('hidden');
                
                loginBtn.className = "flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 bg-brand-600 text-white shadow-lg shadow-brand-600/30";
                registerBtn.className = "flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 text-slate-400 hover:text-white";
            } else {
                loginForm.classList.add('hidden');
                registerForm.classList.remove('hidden');

                registerBtn.className = "flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 bg-brand-600 text-white shadow-lg shadow-brand-600/30";
                loginBtn.className = "flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 text-slate-400 hover:text-white";
            }
        }

        // Toggle Password visibility
        function togglePassword(inputId, iconId) {
            const input = document.getElementById(inputId);
            const icon = document.getElementById(iconId);

            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        }

        // Live Password Match Check
        function checkPasswordMatch() {
            const pass = document.getElementById('reg-password').value;
            const confirmPass = document.getElementById('reg-confirm-password').value;
            const msg = document.getElementById('password-match-msg');

            if (!confirmPass) {
                msg.classList.add('hidden');
                return;
            }

            msg.classList.remove('hidden');
            if (pass === confirmPass) {
                msg.textContent = '✓ Mật khẩu trùng khớp';
                msg.className = 'text-[11px] mt-1 text-emerald-400 font-medium';
            } else {
                msg.textContent = '✗ Mật khẩu xác nhận chưa khớp';
                msg.className = 'text-[11px] mt-1 text-red-400 font-medium';
            }
        }

        // Simulate Passcode / OTP Send
        function sendPasscode() {
            const phone = document.getElementById('reg-phone').value;
            if (!phone || phone.length < 10) {
                showModal('Yêu cầu số điện thoại', 'Vui lòng nhập đúng số điện thoại (10 chữ số) để hệ thống gửi mã Passcode / OTP xác thực.');
                return;
            }
            showToast('Mã Passcode đã được gửi tới SĐT: ' + phone);
        }

        // Registered Users Storage Helper
        function getUsers() {
            const data = localStorage.getItem('passborrow_users');
            if (!data) {
                const defaultUsers = [
                    { username: 'admin', phone: '0912345678', password: '123456', fullName: 'Admin' },
                    { username: 'student', phone: '0987654321', password: '123456', fullName: 'Student' }
                ];
                localStorage.setItem('passborrow_users', JSON.stringify(defaultUsers));
                return defaultUsers;
            }
            try {
                return JSON.parse(data);
            } catch (err) {
                return [];
            }
        }

        // Form Submit Actions
        function handleLogin(e) {
            e.preventDefault();
            const usernameInput = document.getElementById('login-username').value.trim();
            const passwordInput = document.getElementById('login-password').value;

            const users = getUsers();
            const foundUser = users.find(u => 
                u.username.toLowerCase() === usernameInput.toLowerCase() || 
                u.phone === usernameInput
            );

            if (!foundUser) {
                showModal('Đăng nhập thất bại', 'Tài khoản "' + usernameInput + '" chưa tồn tại trên hệ thống. Vui lòng bấm vào "Tạo tài khoản" ở phía dưới để đăng ký trước!');
                return;
            }

            if (foundUser.password !== passwordInput) {
                showModal('Đăng nhập thất bại', 'Mật khẩu nhập vào không chính xác. Vui lòng kiểm tra lại!');
                return;
            }

            // Authentication Successful
            const displayName = (foundUser.username === 'admin' || foundUser.fullName === 'Admin') ? 'Admin' : (foundUser.fullName || foundUser.username);
            localStorage.setItem('passborrow_is_logged_in', 'true');
            localStorage.setItem('passborrow_user_name', displayName);
            localStorage.setItem('passborrow_user_phone', foundUser.phone || '');
            
            showToast('Đăng nhập thành công! Đang chuyển hướng...');
            setTimeout(() => {
                window.location.href = 'PassBorrow.html';
            }, 800);
        }

        function handleRegister(e) {
            e.preventDefault();
            const fullName = document.getElementById('reg-fullname').value.trim();
            const phone = document.getElementById('reg-phone').value.trim();
            const username = document.getElementById('reg-username').value.trim();
            const pass = document.getElementById('reg-password').value;
            const confirmPass = document.getElementById('reg-confirm-password').value;

            if (pass !== confirmPass) {
                showModal('Lỗi xác nhận', 'Mật khẩu muốn đặt và Mật khẩu xác nhận không trùng khớp.');
                return;
            }

            const users = getUsers();
            
            // Check if username or phone already exists
            const existingUser = users.find(u => 
                u.username.toLowerCase() === username.toLowerCase() || 
                u.phone === phone
            );

            if (existingUser) {
                showModal('Tài khoản đã tồn tại', 'Tên đăng nhập hoặc Số điện thoại này đã được đăng ký. Vui lòng chọn tên đăng nhập khác hoặc bấm Đăng nhập.');
                return;
            }

            // Save new account
            const newUser = { username, phone, password: pass, fullName };
            users.push(newUser);
            localStorage.setItem('passborrow_users', JSON.stringify(users));

            // Log in newly registered user
            const registeredDisplayName = (username.toLowerCase() === 'admin') ? 'Admin' : (fullName || username);
            localStorage.setItem('passborrow_is_logged_in', 'true');
            localStorage.setItem('passborrow_user_name', registeredDisplayName);
            localStorage.setItem('passborrow_user_phone', phone);

            showToast('Đăng ký tài khoản thành công! Đang chuyển hướng...');
            setTimeout(() => {
                window.location.href = 'PassBorrow.html';
            }, 1000);
        }

        function handleSocialLogin(provider) {
            showToast('Phương thức ' + provider + ' sẽ được tích hợp khi vận hành chính thức!');
        }

        // Modal Helpers
        function showModal(title, desc) {
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-desc').textContent = desc;
            const modal = document.getElementById('info-modal');
            modal.classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('info-modal').classList.add('hidden');
        }

        // Toast Helper
        function showToast(text) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-text').textContent = text;
            toast.classList.remove('translate-y-20', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');

            setTimeout(() => {
                toast.classList.remove('translate-y-0', 'opacity-100');
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }