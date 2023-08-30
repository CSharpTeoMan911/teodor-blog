import CodeSnippet from "./CodeSnippet";

import "./personal_projects_style.css";
import "./main_style.css";

import vosk_model from "./Vosk_Model.png";
import python_vosk_file from "./python_vosk_file.txt";
import python_vosk_file_snippet_1 from "./python_vosk_file_snippet_1.txt";
import python_vosk_file_snippet_2 from "./python_vosk_file_snippet_2.txt";

var terminal_startup = undefined;
var width = 0;

function Terminal_Startup() {
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
}

export default function Render_EVA_AI_Page() {
  return (
    <div className="main_page_div_style">
      <div className="project_div_style">
        <div id="personal_projects_div" className="personal_project_div_style">
          <div id="crt_div_screen" className="crt_div_screen_style">
            <div id="crt_div" className="crt_div_style">
              <div className="crt_content_div_style">
                <div className="project_name_container_style">
                  <h1 className="project_name_style">Eva the A.I assistant</h1>
                </div>

                <div className="project_article_div_style">
                  {/* <div className="small_non_adjustable_image_container_style">
                    <img className="description_image" src={eva_logo} />
                  </div> */}

                  {/* Introduction section
                  //
                  // [ BEGIN ] */}
                  <h2 className="project_sub_title_style">Introduction</h2>

                  <article className="project_article_style">
                    Eva is an AI assistant built with the purpose of helping
                    users multi-task. Eva is built using a set of different
                    technologies and techniques that are explained in detail in
                    this article.
                  </article>

                  {/* // END */}

                  {/* Tech stack section
                  //
                  // [ BEGIN ] */}

                  <h2 className="project_sub_title_style">Tech stack</h2>

                  <article className="project_article_style">
                    <font className="bold_project_article_section_style">
                      Eva
                    </font>{" "}
                    is built using a concatenation of{" "}
                    <font className="bold_project_article_section_style">
                      .NET Framework
                    </font>
                    ,{" "}
                    <font className="bold_project_article_section_style">
                      WPF
                    </font>
                    , and{" "}
                    <font className="bold_project_article_section_style">
                      Python
                    </font>
                    . This assemble of technologies is very powerfull due to the
                    fact that{" "}
                    <font className="bold_project_article_section_style">
                      .NET Framework
                    </font>{" "}
                    offers functionalities that give complete control of the
                    Windows ecosystem to the application,
                    <font className="bold_project_article_section_style">
                      {" "}
                      WPF
                    </font>{" "}
                    offers beautiful GUI graphics, complete control over the
                    application's layout, and great stability,{" "}
                    <font className="bold_project_article_section_style">
                      C#
                    </font>{" "}
                    offers a lot of processing power and low level
                    functionalities, and{" "}
                    <font className="bold_project_article_section_style">
                      Python
                    </font>{" "}
                    offers a rich variety of librabries with different purposes
                    and functionalities. After a careful analysis, the
                    functionalities of this tech stack can be categorised in 3
                    main categories: Windows functionalities, information
                    processing functionalities, and extra functionalities. Each
                    component of the tech stack is part of one or more
                    categories, and the classification is the following:{" "}
                    <font className="bold_project_article_section_style">
                      .NET Framework
                    </font>
                    {" and "}
                    <font className="bold_project_article_section_style">
                      {" "}
                      WPF
                    </font>{" "}
                    are part of the Windows functionality category,{" "}
                    <font className="bold_project_article_section_style">
                      C#
                    </font>{" "}
                    is part of the information processing category, and{" "}
                    <font className="bold_project_article_section_style">
                      Python
                    </font>{" "}
                    is part of the extra functionalities category.
                  </article>

                  {/* // END */}

                  {/* Speech recognition section
                  //
                  // [ BEGIN ] */}

                  <h2 className="project_sub_title_style">
                    Speech recognition infrastructure
                  </h2>

                  <article className="project_article_style">
                    The speech recognition infrastructure is implemented by
                    using two technologies:{" "}
                    <font className="bold_project_article_section_style">
                      Windows Media Speech Recognition
                    </font>{" "}
                    and{" "}
                    <font className="bold_project_article_section_style">
                      Vosk
                    </font>{" "}
                    speech recognition.{" "}
                    <font className="bold_project_article_section_style">
                      Vosk
                    </font>{" "}
                    has the role of a wake word engine and{" "}
                    <font className="bold_project_article_section_style">
                      Windows Media Speech Recognition
                    </font>{" "}
                    has the role of the application's main speech recognition
                    engine.
                  </article>

                  <img
                    className="large_adjustable_image"
                    alt="speech recognition mechanism"
                    src="https://user-images.githubusercontent.com/87245086/234708319-0ad38208-afe3-460c-9066-224704151b20.png"
                  />

                  <article className="project_article_style">
                    The{" "}
                    <font className="bold_project_article_section_style">
                      Vosk
                    </font>{" "}
                    is used as the wake word engine of the application. When{" "}
                    <font className="bold_project_article_section_style">
                      Vosk
                    </font>{" "}
                    detects the wake word{" "}
                    <font className="bold_project_article_section_style">
                      'listen'
                    </font>
                    {" ,"} or the wake phrase{" "}
                    <font className="bold_project_article_section_style">
                      'hey listen'
                    </font>{" "}
                    the wake word engine will send a message to the main
                    application through the OS kernel{" "}
                    <font className="bold_project_article_section_style">
                      'STDOUT'
                    </font>{" "}
                    stream to activate the{" "}
                    <font className="bold_project_article_section_style">
                      Windows Media Speech Recognition
                    </font>{" "}
                    in order to process voice commands.
                  </article>
                  {/* // END */}

                  {/* Speech recognition section
                  //
                  // [ BEGIN ] */}
                  <h2 className="project_sub_title_style">
                    Vosk speech recognition
                  </h2>

                  <article className="project_article_style">
                    <font className="bold_project_article_section_style">
                      Vosk
                    </font>{" "}
                    is an open-source speech recognition engine that can be used
                    within applications to perform speech recognition related
                    tasks. The reason why I chose{" "}
                    <font className="bold_project_article_section_style">
                      Vosk
                    </font>{" "}
                    to fulfil the role of an offline in-proc speech recognition
                    engine {"( wake word engine )"}is due to multiple factors.
                    After I took into consideration the fact that application's
                    wake word engine must be lightweight, fast, and accurate,
                    and after countless implementations of various speech
                    recognition engines, the results concluded that{" "}
                    <font className="bold_project_article_section_style">
                      Vosk
                    </font>{" "}
                    is the best choise for an offline wake word engine.
                  </article>

                  <img
                    className="large_adjustable_image"
                    alt="vosk speech recognition model"
                    src={vosk_model}
                  />
                  <article className="project_article_style">
                    The model used by the Vosk model in the wake word
                    configuration 40MB model, because it is the smallest, thus
                    having the least amount of impact on the user's machine CPU,
                    RAM,and GPU usage, and also having the fastest processing
                    and response time, characteristics deemed necessary for a
                    wake word engine. The wake word engine is implemented in
                    Python using the{" "}
                    <font className="bold_project_article_section_style">
                      'vosk api'
                    </font>{" "}
                    Python package.
                  </article>

                  <CodeSnippet file={python_vosk_file} language={"python"} />

                  <article className="project_article_style">
                    As it is visible in the code snippet shown above, the Python
                    script is composed out of two main methods, the{" "}
                    <font className="bold_project_article_section_style">
                      'Wake_Word_Engine_Thread_Management'
                    </font>{" "}
                    method and the{" "}
                    <font className="bold_project_article_section_style">
                      'wake_word_operation_stdout_stream'
                    </font>{" "}
                    method. The{" "}
                    <font className="bold_project_article_section_style">
                      'Wake_Word_Engine_Thread_Management'
                    </font>{" "}
                    method is responsible for the initiation of the wake word
                    engine, the speech recognition model load, and the wake word
                    detection opertions. In order for the speech recognition
                    model to be loaded in the speech recognition engine, the
                    path of the speech recognition model is extracted passed to
                    the constructor of a{" "}
                    <font className="bold_project_article_section_style">
                      Vosk
                    </font>{" "}
                    library specific class called{" "}
                    <font className="bold_project_article_section_style">
                      Model
                    </font>
                    , which is subsequently stored inside a variable. Then, the
                    Vosk speech recognizer is initated as an object called{" "}
                    <font className="bold_project_article_section_style">
                      KaldiRecognizer
                    </font>
                    , to which the aforementioned{" "}
                    <font className="bold_project_article_section_style">
                      Model
                    </font>{" "}
                    object along with the frequency at which the wake word
                    engine will operate, are passed within its constructor. The{" "}
                    <font className="bold_project_article_section_style">
                      'vosk api'
                    </font>{" "}
                    library uses the{" "}
                    <font className="bold_project_article_section_style">
                      'Kaldi'
                    </font>{" "}
                    speech recognition engine as a wrapper in order to operate.
                    After the speech recognition engine is initiated, a{" "}
                    <font className="bold_project_article_section_style">
                      'Pyaudio'
                    </font>{" "}
                    object is created. The{" "}
                    <font className="bold_project_article_section_style">
                      'Pyaudio'
                    </font>{" "}
                    library is used here in order to extract audio information
                    from the main audio input stream that will be further
                    processed by the speech recognition engine to perform speech
                    to text conversion and wake word detection. The{" "}
                    <font className="bold_project_article_section_style">
                      'Pyaudio'
                    </font>{" "}
                    object's operation is initiated by calling the{" "}
                    <font className="bold_project_article_section_style">
                      'open{"()"}'
                    </font>{" "}
                    method and passing in as parameters of the method the number
                    of audio channels, the audio format encoding{" "}
                    <font className="bold_project_article_section_style">
                      {"("} which in this scenario is a 16 bits audio format{" "}
                      {")"}
                    </font>
                    , the sample rate{" "}
                    <font className="bold_project_article_section_style">
                      {"("} which is the same as the frequency of the speech
                      recognition engine '16000 hz' {")"}
                    </font>
                    , the number of frames that the buffer should store{" "}
                    <font className="bold_project_article_section_style">
                      {"("} which is '300hz' {")"}
                    </font>
                    , and a boolean that signals if{" "}
                    <font className="bold_project_article_section_style">
                      'Pyaudio'
                    </font>{" "}
                    should extract the data from the device's main input audio
                    stream{" "}
                    <font className="bold_project_article_section_style">
                      {"("} the device's microphone {")"}
                    </font>
                    . After the audio stream is initialised and started, a while
                    loop starts in order to process all the audio data read by
                    the{" "}
                    <font className="bold_project_article_section_style">
                      'Pyaudio'
                    </font>{" "}
                    object, pass the audio data to the speech recogniser, and
                    detect the set wake word. Within the aforementioned loop,
                    the data from the{" "}
                    <font className="bold_project_article_section_style">
                      'Pyaudio'
                    </font>{" "}
                    stream is read in chunks of{" "}
                    <font className="bold_project_article_section_style">
                      300hz
                    </font>{" "}
                    each iteration. Then the audio data is passed to the speech
                    recogniser, which will verify if the wake word is present in
                    the pre-processed data and post-processed data. In order to
                    ensure the lowest degree of latency, the speech recogniser
                    is verifying its pre-processed data and post-processed data
                    and if a wake word is detected, the method{" "}
                    <font className="bold_project_article_section_style">
                      'wake_word_operation_stdout_stream{"()"}'
                    </font>{" "}
                    is called in order to send the activation message to the
                    main{" "}
                    <font className="bold_project_article_section_style">
                      C#
                    </font>{" "}
                    application through the{" "}
                    <font className="bold_project_article_section_style">
                      STDOUT
                    </font>{" "}
                    stream.
                  </article>

                  <CodeSnippet
                    file={python_vosk_file_snippet_1}
                    language={"python"}
                  />

                  <article className="project_article_style">
                    Whitin the{" "}
                    <font className="bold_project_article_section_style">
                      'wake_word_operation_stdout_stream{"()"}'
                    </font>{" "}
                    method, a switch statement detects if the message sent to
                    the main{" "}
                    <font className="bold_project_article_section_style">
                      C#
                    </font>{" "}
                    application should be one that stops the speech recognition
                    opertion, or one that starts the speech recognition
                    operation. After the decision is made, the message is sent
                    through{" "}
                    <font className="bold_project_article_section_style">
                      STDIN
                    </font>{" "}
                    stream by using a print statement containing the message.
                    The possibility of sending a message through the{" "}
                    <font className="bold_project_article_section_style">
                      STDIN
                    </font>{" "}
                    stream using a print statement is possible due to the fact
                    that the{" "}
                    <font className="bold_project_article_section_style">
                      Python
                    </font>{" "}
                    script was started by the main{" "}
                    <font className="bold_project_article_section_style">
                      C#
                    </font>{" "}
                    application and when the{" "}
                    <font className="bold_project_article_section_style">
                      Python
                    </font>{" "}
                    script was started by the main{" "}
                    <font className="bold_project_article_section_style">
                      C#
                    </font>{" "}
                    application, the
                    <font className="bold_project_article_section_style">
                      {" "}
                      Python
                    </font>{" "}
                    script's{" "}
                    <font className="bold_project_article_section_style">
                      STDIN
                    </font>{" "}
                    and{" "}
                    <font className="bold_project_article_section_style">
                      STDOUT
                    </font>{" "}
                    streams were bypassed through the main{" "}
                    <font className="bold_project_article_section_style">
                      C#
                    </font>{" "}
                    application, meaning that all input/output operations of the{" "}
                    <font className="bold_project_article_section_style">
                      Python
                    </font>{" "}
                    application are marshalled through the main{" "}
                    <font className="bold_project_article_section_style">
                      C#
                    </font>{" "}
                    application.
                  </article>

                  <CodeSnippet
                    file={python_vosk_file_snippet_2}
                    language={"python"}
                  />

                  <h2 className="project_sub_title_style">
                    Windows Media Speech Recognition
                  </h2>

                  {/* <article className="project_article_style">
                    <font className="bold_project_article_section_style">
                      Windows Media Speech Recognition
                    </font>{" "}
                  </article> */}

                  {/* // END */}

                  {/* <article className="project_article_style">
                    Eva is an AI assistant built with the purpose of helping
                    users multi-task. Eva is built using a set of different
                    technologies and techniques that are explained in detail in
                    this article.
                  </article> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

terminal_startup = setInterval(() => {
  Terminal_Startup();
}, 10);

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
