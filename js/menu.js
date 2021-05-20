var $q = function (x) { return document.querySelector(x); };
var $qa = function (x) { return document.querySelectorAll(x); };

const listMenu12 =
    [
        {
            parent: "Web Development",
            id: "web-development",
            children: ["Web Development",
                "JavaScript",
                "React",
                "Angular",
                "CSS",
                "PHP",
                "Node.Js",
                "Python",
                "WordPress",
            ]
        },
        {
            parent: "Mobile Apps",
            id: "mobile-apps",
            children: [
                "Android Development",
                "iOS Development",
                "Google Flutter",
                "Swift",
                "React Native",
                "Dart Programming Language",
                "Mobile Development",
                "Kotlin",
                "Redux Framework",]
        },
        {
            parent: "Game Development",
            id: "game-development",
            children: [
                "Unity",
                "C#",
                "Game Development Fundamentals",
                "Unreal Engine",
                "3D Game Development",
                "C++",
                "2D Game Development",
                "Blender",
                "3D Animation",

            ]
        },
        {
            parent: "Finance",
            id: "finance",
            children: [
                "Financial Analysis",
                "Investing",
                "Stock Trading",
                "Finance Fundamentals",
                "Financial Modeling",
                "Forex",
                "Excel",
                "Accounting",
                "Python",
            ]
        },
        {
            parent: "Entrepreneurship",
            id: "entrepreneurship",
            children: [
                "Business Fundamentals",
                "Dropshipping",
                "Amazon FBA",
                "Entrepreneurship Fundamentals",
                "Business Strategy",
                "Business Plan",
                "Blogging",
                "Startup",
                "Shopify",
            ]
        },
        {
            parent: "Data & Analytics",
            id: "data-analytics",
            children: [
                "SQL",
                "Microsoft Power BI",
                "Business Analysis",
                "Tableau",
                "Business Intelligence",
                "MySQL",
                "Data Modeling",
                "Data Analysis",
                "Data Science",
            ]
        },
        {
            parent: "IT Certification",
            id: "it-certification",
            children: [
                "AWS Certification",
                "AWS Certified Solutions Architect - Associate",
                "Microsoft Certification",
                "Cisco CCNA",
                "CompTIA A+",
                "AWS Certified Cloud Practitioner",
                "AWS Certified Developer - Associate",
                "CompTIA Security+",
                "CCNA 200-301",
            ]
        },
        {
            parent: "Personal Transformation",
            id: "personal-transformation",
            children: [
                "Life Coach Training",
                "Reiki",
                "Neuro-Linguistic Programming",
                "Energy Healing",
                "Mindfulness",
                "Neuroscience",
                "Personal Development",
                "Meditation",
                "Hypnotherapy",
            ]
        },
        {
            parent: "Graphic Design",
            id: "graphic-design",
            children: [
                "Photoshop",
                "Drawing",
                "Graphic Design",
                "Adobe Illustrator",
                "Digital Painting",
                "InDesign",
                "Character Design",
                "Figure Drawing",
                "Logo Design",
            ]
        },
        {
            parent: "Digital Marketing",
            id: "digital-marketing",
            children: [
                "Digital Marketing",
                "Google Ads (Adwords)",
                "Social Media Marketing",
                "Google Ads (AdWords) Certification",
                "Marketing Strategy",
                "Internet Marketing",
                "Email Marketing",
                "Google Analytics",
                "Marketing Analytics",
            ]
        },
        {
            parent: "Categories",
            id: "all-categories",
            children: [
                {
                    parent: "Development",
                    id: "development",
                    icon: "fab fa-connectdevelop",
                    children: [
                        "Web Development",
                        "Data Science",
                        "Mobile Apps",
                        "Programming Languages",
                        "Game Development",
                        "Databases",
                        "Software Testing",
                        "Software Engineering",
                        "Development Tools",
                        "E-Commerce",
                    ]

                },
                {
                    parent: "Business",
                    id: "business",
                    icon: "far fa-chart-bar",
                    children: [
                        "Finance",
                        "Entrepreneurship",
                        "Communications",
                        "Management",
                        "Sales",
                        "Strategy",
                        "Operations",
                        "Project Management",
                        "Business Law",
                        "Data & Analytics",
                        "Home Business",
                        "Human Resources",
                        "Industry",
                        "Media",
                        "Real Estate",
                        "Other",
                    ]
                },
                {
                    parent: "Finance & Accounting",
                    id: "finance-accounting",
                    icon: "fas fa-calculator",
                    children: [
                        "Accounting & Bookkeeping",
                        "Compliance",
                        "Cryptocurrency & Blockchain",
                        "Economics",
                        "Finance",
                        "Finance Cert & Exam Prep",
                        "Financial Modeling & Analysis",
                        "Investing & Trading",
                        "Money Management Tools",
                        "Taxes",
                        "Other Finance & Economics",
                    ]
                },
                {
                    parent: "IT & Software",
                    id: "it-software",
                    icon: "fab fa-uncharted",
                    children: [
                        "IT Certification",
                        "Network & Security",
                        "Hardware",
                        "Operating Systems",
                        "Other",
                    ]
                },
                {
                    parent: "Office Productivity",
                    id: "office-productivity",
                    icon: "fab fa-buromobelexperte",
                    children: [
                        "Microsoft",
                        "Apple",
                        "Google",
                        "SAP",
                        "Oracle",
                        "Other",
                    ]
                },
                {
                    parent: "Personal Development",
                    id: "personaldevelopment",
                    icon: "far fa-file-code",
                    children: [
                        "Personal Transformation",
                        "Productivity",
                        "Leadership",
                        "Personal Finance",
                        "Career Development",
                        "Parenting & Relationships",
                        "Happiness",
                        "Religion & Spirituality",
                        "Personal Brand Building",
                        "Creativity",
                        "Influence",
                        "Self Esteem",
                        "Stress Management",
                        "Memory & Study Skills",
                        "Motivation",
                        "Other",
                    ]
                },
                {
                    parent: "Design",
                    id: "design",
                    icon: "fas fa-pen-nib",
                    children: [
                        "Web Design",
                        "Graphic Design",
                        "Design Tools",
                        "User Experience",
                        "Game Design",
                        "Design Thinking",
                        "3D & Animation",
                        "Fashion",
                        "Architectural Design",
                        "Interior Design",
                        "Other",
                    ]
                },
                {
                    parent: "Marketing",
                    id: "marketing",
                    icon: "fas fa-bullseye",
                    children: [
                        "Digital Marketing",
                        "Search Engine Optimization",
                        "Social Media Marketing",
                        "Branding",
                        "Marketing Fundamentals",
                        "Analytics & Automation",
                        "Public Relations",
                        "Advertising",
                        "Video & Mobile Marketing",
                        "Content Marketing",
                        "Growth Hacking",
                        "Affiliate Marketing",
                        "Product Marketing",
                        "Other",
                    ]
                },
                {
                    parent: "Lifestyle",
                    id: "lifestyle",
                    icon: "fas fa-hand-holding-water",
                    children: [
                        "Arts & Crafts",
                        "Food & Beverage",
                        "Beauty & Makeup",
                        "Travel",
                        "Gaming",
                        "Home Improvement",
                        "Pet Care & Training",
                        "Other",
                    ]
                },
                {
                    parent: "Photography",
                    id: "photography",
                    icon: "fas fa-camera-retro",
                    children: [
                        "Digital Photography",
                        "Photography Fundamentals",
                        "Portraits",
                        "Photography Tools",
                        "Commercial Photography",
                        "Video Design",
                        "Other",
                    ]
                },
                {
                    parent: "Health & Fitness",
                    id: "health-fitness",
                    icon: "fas fa-procedures",
                    children: [
                        "Fitness",
                        "General Health",
                        "Sports",
                        "Nutrition",
                        "Yoga",
                        "Mental Health",
                        "Dieting",
                        "Self Defense",
                        "Safety & First Aid",
                        "Dance",
                        "Meditation",
                        "Other",
                    ]
                },
                {
                    parent: "Music",
                    id: "music",
                    icon: "fas fa-music",
                    children: [
                        "Instruments",
                        "Production",
                        "Music Fundamentals",
                        "Vocal",
                        "Music Techniques",
                        "Music Software",
                        "Other",
                    ]
                },
                {
                    parent: "Teaching & Academics",
                    id: "teaching-academics",
                    icon: "fas fa-chalkboard-teacher",
                    children: [
                        "Engineering",
                        "Humanities",
                        "Math",
                        "Science",
                        "Online Education",
                        "Social Science",
                        "Language",
                        "Teacher Training",
                        "Test Prep",
                        "Other Teaching & Academics",
                    ]
                }
            ]
        }
    ]

createMenu1(listMenu12)
addEventOpenMenu();
addEventCloseMenu();
addEventBackToMenu1();
addEventNextToMenu2();
addEventNextToMenu3();
addEventBackToMenu2();

function createMenu1(array) {
    let rightIcon = `<span class="ms-auto" ><i class="fas fa-chevron-right"></i></span>`

    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        let li = document.createElement("li");
        li.setAttribute("class", "nav-item");
        li.innerHTML = `<a class="nav-link show-menu-2" show=${item.id}>${item.parent}${rightIcon}</a>`

        $q("#append-menu-1").appendChild(li);
        createMenu2(item.children, item.id, item.parent)
    }
}

function createMenu2(listItem, id, parent) {
    createUlMenu2(id, parent);
    createLiMenu2(listItem, id);
}

function createMenu3(listItem, id, parent, icon) {
    createUlMenu3(id, parent, icon);
    createLiMenu3(listItem, id);

}

function createUlMenu2(id, parent) {
    $q("#menu-2-2").innerHTML +=
        `<div class="menu-2-2__item" id=${id}>
        <ul class="nav flex-column"> 
            <li class="nav-item">
                <a class="nav-link active show-menu-1 py-4"> <span class="me-3" ><i class="fas fa-chevron-left"></i ></span>
                    ${parent}
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark fw-bold" > All ${parent} </a>
            </li>
        </ul>
    </div>`
}
function createLiMenu2(listItem, id) {
    let rightIcon = `<span class="ms-auto" ><i class="fas fa-chevron-right"></i></span>`;
    for (let i = 0; i < listItem.length; i++) {
        // add li
        let item = listItem[i];
        if (typeof (item) === "string") {
            $q(`#${id} ul`).innerHTML +=
                `<li class="nav-item">
                    <a class="nav-link"
                        >${item}
                    </a>
                </li>`
        }

        if (typeof (item) === "object") {
            $q(`#${id} ul`).innerHTML += `<li class="nav-item">
                <a class="nav-link show-menu-3" show=${item.id}
                    ><span><i class="${item.icon} icon" ></i >${item.parent}</span>
                     ${rightIcon}
                </a>
        </li>`
            createMenu3(item.children, item.id, item.parent, item.icon);
        }
    }
}

function createUlMenu3(id, parent, icon) {
    let leftIcon = `<span class="me-2"> <i class="fas fa-chevron-left"></i></span>`
    let backMenu1Li =
        `<li class="nav-item">
            <a class="nav-link show-menu-1 active py-4"> ${leftIcon}Menu </a>
        </li>`
    let backMenu2Li =
        `<li class="nav-item">
            <a class="nav-link py-3 show-menu-2 align-items-center">
            ${leftIcon}
            <i class="${icon} fa-2x me-2" ></i> ${parent} </a>
        </li>`


    $q("#menu-2-3").innerHTML +=
        `
            <div class="menu-2-3__item" id=${id}>
                <ul class="nav flex-column">
                    ${backMenu1Li}
                    ${backMenu2Li}
                    <hr class="m-0">
                    <li class="nav-item">
                        <a class="nav-link text-dark"
                            >All ${parent}
                        </a>
                    </li>
                </ul>
            </div>
        `
}
function createLiMenu3(listItem, id) {
    for (let i = 0; i < listItem.length; i++) {
        $q(`#${id} ul`).innerHTML += `
        <li class="nav-item">
                <a class="nav-link" href="#"
                    >${listItem[i]}
                </a>
        </li>
        `
    }
}

function addEventNextToMenu2() {
    let listShow = $qa("#menu-2-1 .show-menu-2");
    listShow.forEach(function (item, key) {
        item.addEventListener("click", function () {
            let showId = item.getAttribute("show");
            $q(`#${showId}`).style.display = "block";
            showMenu2();
        })
    })
}

function addEventOpenMenu() {
    let toggle = $q("#toggle-button");
    toggle.addEventListener('click', function (e) {
        let menu2 = $q("#menu-2");
        menu2.style.left = 0;
        $q("#overlay--mobile-show").style.display="block";
    })
}

function addEventCloseMenu() {
    document.addEventListener("click", function (e) {
        let menu2 = $q("#menu-2");
        if (!menu2.contains(e.target) && menu2.offsetLeft === 0) {
            menu2.style.left = "-45rem";
            $q("#overlay--mobile-show").style.display="none";
        }
    })
}
// show menu 2 from menu 1
function addEventBackToMenu1() {
    let listShow = $qa(".show-menu-1");
    listShow.forEach(function (item, key) {
        item.addEventListener("click", function () {
            resetMenu2();
            resetMenu3();
            showMenu1();
        })
    })
}
//  show menu 3 from menu 2
function addEventNextToMenu3() {
    const listShow = $qa(".show-menu-3");
    listShow.forEach(function (item, key) {
        item.addEventListener("click", function () {
            let showId = item.getAttribute("show");
            $q(`#${showId}`).style.display = "block";
            $q("#menu-2-wrap").style.transform = "translate(-30rem, 0)";
        })
    })
}

// show menu 2 from menu 3
function addEventBackToMenu2() {
    const listShow = $qa("#menu-2-3 .show-menu-2");
    listShow.forEach(function (item, key) {
        item.addEventListener("click", function () {
            resetMenu3();
            showMenu2();
        })
    })
}



function resetMenu3() {
    const listMenu3 = $qa(".menu-2-3__item");
    setTimeout(function () {
        listMenu3.forEach(function (item, key) {
            item.style.display = "none";
        })
    }, 500) //thoi gian timeout phu thuoc va transition trong css la 0.5s, khong phai hard code

}
function resetMenu2() {
    setTimeout(function () {
        const listMenu2 = $qa(".menu-2-2__item");
        listMenu2.forEach(function (item, key) {
            item.style.display = "none";
        })
    }, 500);//thoi gian timeout phu thuoc va transition trong css la 0.5s, khong phai hard code

}


function showMenu1() {
    $q("#menu-2-wrap").style.transform = "translate(0, 0)";
}
function showMenu2() {
    $q("#menu-2-wrap").style.transform = "translate(-15rem, 0)";
}