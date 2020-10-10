// 1
// moon.jpg قم بالوصول إلى الصورة وتغيرها إلى
//let caption = document.getElementById("image");
//caption.src ="./images/moon.jpg";
// 2
// "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر
//let title = document.getElementById("caption");
//console.log(title);
//title.innerHTML ="القمر";

// 3
// بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// دون الحاجة إلى الخطوتين 2و1

function planetSwitcher(){
    let title = document.getElementById("caption");
    let caption = document.getElementById("image");

if (title.innerHTML == "القمر"){
   title.innerHTML = "الشمس"
   caption.src = "././images/sun.jpg";
   xx.style.background = `#c67700`;
}else if (title.innerHTML == "الشمس"){
caption.src = "././images/moon.jpg";
title.innerHTML ="القمر";
xx.style.background = `white`;
}
}
// 4
// Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية

/*  الوضع الليلي
    يتغير لون خلفية الصفحة للرمادي
    تتغير الصورة لصورة القمر
    "يتغير الاسم أسفل الصورة ويصبح "القمر
*/

/*  الوضع النهاري
    يتغير لون خلفية الصفحة للأبيض
    تتغير الصورة لصورة الشمس
    "يتغير الاسم أسفل الصورة ويصبح "الشمس
*/
