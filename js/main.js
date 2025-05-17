let loginForm = document.getElementById("loginForm");
let message = document.getElementById("message");

loginForm.addEventListener("submit", async (e) => {
     e.preventDefault()
    let login = document.getElementById("Loginparol").value.trim();
    let parol = document.getElementById("passwordLogin").value;

    try {
        let res = await fetch("https://testaoron.limsa.uz/api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login: login, password: parol })
        });

        const data = await res.json();

        console.log("API javobi:", data); // tekshirish uchun
        // Shart: token mavjud bo‘lsa, demak login muvaffaqiyatli
        if (data?.success) {
            message.textContent = "Muvaffaqiyatli kirildi!";
            message.style.color = "green";

            setTimeout(() => {
                window.location.href = "/about.html";
            }, 1000);
        } else {
            // Agar token yo'q bo‘lsa yoki boshqa xatolik bo‘lsa
            message.textContent =  "Login yoki parol noto‘g‘ri.";
            message.style.color = "red";
        }

    } catch (err) {
        alert("API bilan ulanishda xatolik yuz berdi.");
        console.error("Xatolik:", err);
    }
});
