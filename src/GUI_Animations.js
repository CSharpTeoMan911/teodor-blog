// window.addEventListener("message", async (e) => {
//     console.log("OK");
//   switch (e.data) {
//     case "personal projects window terminal startup":
//       terminal_startup = await setInterval(async() => {
//         await Terminal_Startup(e.data);
//       }, 10);
//       break;
//   }
// });

import right from "./Images/right.png";
import down from "./Images/down.png";

// MAIN MENU ANIMATION VARIABLES
//
// [ BEGIN ]

var label_width = 0;

var menu_height = 0;

var expand_main_menu_label = undefined;

var expand_main_menu = undefined;

var expanded_or_contracted = 0;

// [ END ]

// TERMINAL STARTUP ANIMATION VARIABLES
//
// [ BEGIN ]

var terminal_startup = undefined;
var width = 0;

// [ END ]

// NAME ANIMATION VARIABLES
//
// [ BEGIN ]
var name_animation = undefined;
var name_elements = [
  "T",
  "e",
  "o",
  "d",
  "o",
  "r",
  "&#160;",
  "M",
  "i",
  "h",
  "a",
  "i",
  "l",
];
var name_elements_index = 0;
var name_value = "";
// [ END ]

// MAIN MENU ANIMATION FUNCTIONS
//
// [ BEGIN ]

async function Expand_Main_Menu_Label_Animation() {
  if (expanded_or_contracted === 0 || expanded_or_contracted === 2) {
    try {
      if (label_width < 25) {
        var menu_label = document.getElementById("menu_label");
        label_width++;

        menu_label.style.width = label_width + "vmin";
        menu_label.style.visibility = "visible";
      } else {
        await clearInterval(expand_main_menu_label);
      }
    } catch {
      await clearInterval(expand_main_menu_label);
    }
  } else {
    await clearInterval(expand_main_menu_label);
  }
}

export async function Expand_Main_Menu_Label() {
  expand_main_menu_label = await setInterval(async () => {
    await Expand_Main_Menu_Label_Animation();
  }, 10);
}

export async function Contract_Main_Menu_Label() {
  if (expanded_or_contracted === 0 || expanded_or_contracted === 2) {
    var menu_label = document.getElementById("menu_label");
    label_width = 0;
    menu_label.style.width = label_width + "vmin";
    menu_label.style.visibility = "hidden";
  }
  await clearInterval(expand_main_menu_label);
}

export async function Expand_Or_Contract_Main_Menu() {
  expanded_or_contracted++;

  if (expanded_or_contracted === 1) {
    await Expand_Main_Menu();
  } else if (expanded_or_contracted === 2) {
    await Contract_Main_Menu();
    expanded_or_contracted = 0;
  }
}

async function Expand_Main_Menu_Animation() {
  var menu = document.getElementById("main_menu");
  if (menu_height < 32) {
    menu_height++;
    menu.style.height = menu_height + "vmin";
    menu.style.visibility = "visible";
  } else {
    var items = document.getElementById("items_container").children;
    for (var i = 0; i < items.length; i++) {
      items[i].style.visibility = "visible";
      items[i].style.minHeight = "6.5vmin";
      items[i].style.height = "auto";
    }
    menu.style.height = "32vmin";

    await clearInterval(expand_main_menu);
  }
}

async function Expand_Main_Menu() {
  var menu_label = document.getElementById("menu_label");
  label_width = 25;
  menu_label.style.width = label_width + "vmin";
  menu_label.style.visibility = "visible";

  if (expanded_or_contracted === 1) {
    var img = document.getElementById("main_menu_button_img");
    img.src = down;

    expand_main_menu = await setInterval(async () => {
      await Expand_Main_Menu_Animation();
    }, 10);
  } else {
    await clearInterval(expand_main_menu);
  }
}

async function Contract_Main_Menu() {
  var img = document.getElementById("main_menu_button_img");
  img.src = right;

  var menu_label = document.getElementById("menu_label");
  label_width = 0;
  menu_label.style.width = label_width + "vmin";
  menu_label.style.visibility = "hidden";

  menu_height = 0;
  var menu = document.getElementById("main_menu");
  menu.style.height = menu_height + "vmin";
  menu.style.visibility = "hidden";

  var items = document.getElementById("items_container").children;
  for (var i = 0; i < items.length; i++) {
    items[i].style.visibility = "hidden";
    items[i].style.minHeight = "0vmin";
    items[i].style.height = "0vmin";
  }

  await clearInterval(expand_main_menu);
}

//
// [ END ]

// TERMINAL STARTUP ANIMATION
//
// [ BEGIN ]

async function Terminal_Startup_Animation() {
  var div = document.getElementById("personal_details_div");



  try {
    if (div !== null || div !== undefined) {
      if (width < 100) {
        width++;
        var set_width = width + "%";
        div.style.width = set_width;
      } else {
        await clearInterval(terminal_startup);
      }
    }
  } catch {
    await clearInterval(terminal_startup);
  }
}

export async function Terminal_Startup() {
  terminal_startup = await setInterval(async () => {
    await Terminal_Startup_Animation();
  }, 70);
}

// [ END ]

// NAME ANIMATION
//
// [ BEGIN ]

async function Name_Animation_Function() {
  try {
    var name = document.getElementById("name");

    if (name !== null || name !== undefined) {
      if (name_elements_index < name_elements.length) {
        if (name_elements_index === 0 && name.innerHTML.length > 0) {
          name_value = "";
        }
        name_value += name_elements[name_elements_index];
        name_elements_index++;
      } else {
        await clearInterval(name_animation);
      }

      name.innerHTML = name_value;
    }
  } catch {
    await clearInterval(name_animation);
  }
}

export async function Name_Animation() {
  name_animation = await setInterval(async () => {
    await Name_Animation_Function();
  }, 200);
}

// [ END ]

window.addEventListener("beforeunload", async (event) => {
  try {
    await clearInterval(expand_main_menu);
    await clearInterval(expand_main_menu_label);
    await clearInterval(terminal_startup);
  } catch {}

  width = 0;
});

window.addEventListener("beforeload", async (event) => {
  try {
    await clearInterval(expand_main_menu);
    await clearInterval(expand_main_menu_label);
    await clearInterval(terminal_startup);
  } catch {}

  width = 0;
});
