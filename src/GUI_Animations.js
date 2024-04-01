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


// MAIN MENU ANIMATION VARIABLES
//
// [ BEGIN ]


let expand_main_menu_label = undefined;

let expand_main_menu = undefined;


// [ END ]

// TERMINAL STARTUP ANIMATION VARIABLES
//
// [ BEGIN ]

let terminal_startup = undefined;
let width = 0;

// [ END ]

// NAME ANIMATION VARIABLES
//
// [ BEGIN ]
let name_animation = undefined;
let name_elements = [
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
let name_elements_index = 0;
let name_value = "";
// [ END ]

let background_resize = undefined




// MAIN MENU ANIMATION FUNCTIONS
//
// [ BEGIN ]


async function AutoSizeBackgroundImage() {
  let backgroundImage = document.getElementById("background-image");
  let appNavbar = document.getElementById("app-navbar");
  if(backgroundImage != null){
    if(appNavbar != null){
      backgroundImage.style.height = (window.innerHeight + appNavbar.offsetHeight) + "px";
    }
  }
}

export async function SetAutoSizeBackgroundImage() {
  background_resize = await setInterval(await (async()=>{await AutoSizeBackgroundImage()}), 10);
}

// TERMINAL STARTUP ANIMATION
//
// [ BEGIN ]

async function Terminal_Startup_Animation() {
  var div = document.getElementById("terminal");

  try {
    if (div !== null || div !== undefined) {
      if (width < 100) {
        width +=2.5;
        div.style.width = width + "%";
      } else {
        await clearInterval(terminal_startup);
      }
    }
    else
    {
      await clearInterval(terminal_startup);
    }
  } catch {
    await clearInterval(terminal_startup);
  }
}

export async function Terminal_Startup() {
  var div = document.getElementById("terminal");
  if (div !== null && div !== undefined) {
    div.style.width = "435px";
    terminal_startup = await setInterval(async () => {
      await Terminal_Startup_Animation();
    }, 20);
  }
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
    else{
      await clearInterval(name_animation);
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
