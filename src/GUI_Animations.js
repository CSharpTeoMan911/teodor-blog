import { isMobile } from "react-device-detect";

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

let terminal_resize = undefined





// MAIN MENU ANIMATION FUNCTIONS
//
// [ BEGIN ]

async function AutoSizeTerminal(size) {
  let terminal_skeleton = document.getElementById("terminal-skeleton");
  let terminal = document.getElementById("terminal");
  let terminal_handle = document.getElementById("terminal-handle");
  let terminal_control = document.getElementById("terminal-control");
  let terminal_logo = document.getElementById("terminal-logo");
  let terminal_element = document.getElementById("terminal-element");

  if (terminal_skeleton != null) {
    if (terminal != null) {
      if (terminal_handle != null) {
        if (terminal_control != null) {
          if (terminal_logo != null) {
            if (terminal_element != null) {
              if (isMobile === false) {
                if (window.innerWidth > 700) {
                  if (size === "normal") {
                    terminal_skeleton.style.width = "85vw";
                    terminal_skeleton.style.marginTop = "100px";
                    terminal_element.style.height = "70vh"
                  }
                  else if (size === "large") {
                    terminal_skeleton.style.width = "95vw";
                    terminal_skeleton.style.marginTop = "50px";
                    terminal_element.style.height = "80vh"
                  }

                  terminal_handle.style.height = "38px";
                  terminal_logo.style.height = "38px";
                  terminal_control.style.height = "38px";
                }
                else {
                  terminal_skeleton.style.width = "100vw";
                  terminal_skeleton.style.marginTop = "0px";
                  terminal_handle.style.height = "0px";
                  terminal_logo.style.height = "0px";
                  terminal_control.style.height = "0px";
                  terminal_element.style.height = "100vh"
                }
              }
            }
          }
        }
      }
    }
  }
}


export async function SetAutoSizeTerminal(size) {
  terminal_resize = await setInterval(async () => { await AutoSizeTerminal(size) }, 10);
}

// TERMINAL STARTUP ANIMATION
//
// [ BEGIN ]

async function Terminal_Startup_Animation() {
  var div = document.getElementById("terminal");
  let terminal_control = document.getElementById("terminal-control");

  try {
    if (div !== null ) {
      if(terminal_control != null) {
        if (width < 100) {
          width += 2;
          div.style.width = width + "%";
          terminal_control.style.width = "0%";
        } else {
          terminal_control.style.width = "auto";
          await clearInterval(terminal_startup);
        }
      }
    }
    else {
      await clearInterval(terminal_startup);
    }
  } catch {
    await clearInterval(terminal_startup);
  }
}

export async function Terminal_Startup() {
  terminal_startup = await setInterval(async () => {
    await Terminal_Startup_Animation();
  }, 20);
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
    else {
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
    await clearInterval(name_animation);
    await clearInterval(terminal_resize);
    await clearInterval(terminal_startup);
  } catch { }

  width = 60;
});

window.addEventListener("beforeload", async (event) => {
  try {
    await clearInterval(name_animation);
    await clearInterval(terminal_resize);
    await clearInterval(terminal_startup);
  } catch { }

  width = 60;
});
