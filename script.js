

const navbar = document.getElementById('naVBar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust this value based on when you want the color to change
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});









    function info() {
        Swal.fire({
            title: 'طريقة الاشتراك',
            text: `   دوس على "أنشئ حسابك الآن !" لو لسة معملتش حساب على المنصة و بتملى البيانات كويس و بعدين بتدوس علي إنشاء الحساب
هيقولك تم إنشاء حسابك بنجاح بتروح للصفحة الرئيسية
هتنزل تحت هتختار الكورس اللي انت عاوز تشترك فيه

بعد مـ تدفع هتلاقي الكورس اتفعلك اوتوماتك على
المنصة علي طول

و هتلاقي مكتوب على الكورس : "انت مشترك بهذا الكورس"

لو قابلتك اي مشكلة كلمنا على الواتساب و هنحللك مشكلتك في اسرع وقت ❤️
  `,
            icon: 'success',
            className: 'join',

            confirmButtonText: "حسنا",
            footer: `<a href="" class=" btn btn-raduis ms-1 bg-danger border-0" role="button"
                    aria- pressed="true" >  الواتساب
                    </a > `,
            timer: 15000000000000,
            showCloseButton: true
        })
    }
   
 