var terminal_startup = undefined;
var width = 0;

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

function Terminal_Startup(window) {
  switch (window) {
    case "personal projects window terminal startup":
      var main_bio_div = document.getElementById("personal_projects_div");

      try {
        if (main_bio_div !== null || main_bio_div !== undefined) {
          if (width < 100) {
            width++;
            var set_width = width + "%";
            main_bio_div.style.width = set_width;
          } else {
            clearInterval(terminal_startup);
          }
        }
      } catch {
        clearInterval(terminal_startup);
      }
      break;
  }
}

window.addEventListener("beforeunload", (event) => {
  try {
    clearInterval(terminal_startup);
  } catch {}
});

window.addEventListener("beforeload", (event) => {
  try {
    clearInterval(terminal_startup);
  } catch {}
});
