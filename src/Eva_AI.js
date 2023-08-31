import CodeSnippet from "./CodeSnippet";
import { Terminal_Startup } from "./GUI_Animations";

import "./personal_projects_style.css";
import "./main_style.css";

import { useEffect } from "react";

import Eva_Mic_Highlight from "./Eva_Mic_Highlight.png";

import vosk_model from "./Vosk_Model.png";
import python_vosk_file from "./python_vosk_file.txt";
import python_vosk_file_snippet_1 from "./python_vosk_file_snippet_1.txt";
import python_vosk_file_snippet_2 from "./python_vosk_file_snippet_2.txt";
import vosk_audio_processing_snippet from "./vosk_audio_processing_snippet.txt";
import online_speech_recognition_file from "./online_speech_recognition_file.txt";
import online_speech_recogniser_method from "./online_speech_recogniser_method.txt";
import online_speech_recognition_object from "./online_speech_recognition_object.txt";
import online_speech_recogniser_topic_constraints from "./online_speech_recogniser_topic_constraints.txt";
import online_speech_recogniser_timeout_proprieties from "./online_speech_recogniser_timeout_proprieties.txt";
import online_speech_recogniser_speech_recognition_operation from "./online_speech_recogniser_speech_recognition_operation.txt";
import wake_word_engine_startup from "./wake_word_engine_startup.txt";
import wake_word_engine_shutdown from "./wake_word_engine_shutdown.txt";
import natural_language_understanding_engine from "./natural_language_understanding_engine.txt";

export default function Render_EVA_AI_Page() {
  return (
    <div className="main_page_div_style">
      <div className="project_div_style">
        <div id="personal_details_div" className="personal_details_div_style">
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
                    this article. You can find the code for {"Eva "}
                    <a
                      className="link_style"
                      href="https://github.com/CSharpTeoMan911/Eva"
                    >
                      here
                    </a>
                    . If you want to download Eva as a standalone application,
                    you can find the installer{" "}
                    <a
                      className="link_style"
                      href="https://sourceforge.net/projects/eva-ai/"
                    >
                      here
                    </a>.
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
                  {/* Vosk recognition section
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
                    to fulfil the role of an offline wake word engine is due to
                    multiple factors. After I took into consideration the fact
                    that application's wake word engine must be lightweight,
                    fast, and accurate, and after countless implementations of
                    various speech recognition engines, the results concluded
                    that{" "}
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
                    configuration, is the 40MB model, because it is the
                    smallest, thus having the least amount of impact on the
                    user's machine CPU, RAM,and GPU usage, and also having the
                    fastest processing and response time, characteristics deemed
                    necessary for a wake word engine. The wake word engine is
                    implemented in Python using the{" "}
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
                    function and the{" "}
                    <font className="bold_project_article_section_style">
                      'wake_word_operation_stdout_stream'
                    </font>{" "}
                    function. The{" "}
                    <font className="bold_project_article_section_style">
                      'Wake_Word_Engine_Thread_Management'
                    </font>{" "}
                    function is responsible for the initiation of the wake word
                    engine, the speech recognition model load, and the wake word
                    detection opertions. In order for the speech recognition
                    model to be loaded in the speech recognition engine, the
                    path of the speech recognition model is extracted, passed to
                    the constructor of a{" "}
                    <font className="bold_project_article_section_style">
                      Vosk
                    </font>{" "}
                    library specific class, called{" "}
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
                      {"("} which in this scenario is a 16000 bits audio format{" "}
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
                    .
                  </article>

                  <CodeSnippet
                    file={vosk_audio_processing_snippet}
                    language={"python"}
                  />

                  <article className="project_article_style">
                    After the audio stream is initialised and started, a while
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
                  </article>
                  <CodeSnippet
                    file={python_vosk_file_snippet_2}
                    language={"python"}
                  />
                  {/* // END */}
                  {/* // Windows media speech recognition
                  //
                  // */}
                  <h2 className="project_sub_title_style">
                    Windows Media Speech Recognition
                  </h2>
                  <article className="project_article_style">
                    <font className="bold_project_article_section_style">
                      Windows Media Speech Recognition
                    </font>{" "}
                    is a closed source online speech recongition engine
                    developed by{" "}
                    <font className="bold_project_article_section_style">
                      Mircosoft
                    </font>
                    {". "}This online speech recognition engine was chosen as
                    the main speech recognition engine due to multiple factors.
                    The first factor is the fact that is free. The{" "}
                    <font className="bold_project_article_section_style">
                      Windows Media Speech Recognition
                    </font>{" "}
                    engine is the only online speech recognition engine
                    available to use free of charge and that has a high degree
                    of accuracy. The second factor why the{" "}
                    <font className="bold_project_article_section_style">
                      Windows Media Speech Recognition
                    </font>{" "}
                    was chosen as the main speech recognition engine is due to
                    its availability.{" "}
                    <font className="bold_project_article_section_style">
                      Windows Media Speech Recognition
                    </font>{" "}
                    comes shipped with the Windows 10/11 OS, and this means that
                    anyone that has a Windows 10/11 OS can access it. The third
                    and final reason is that{" "}
                    <font className="bold_project_article_section_style">
                      Windows Media Speech Recognition
                    </font>{" "}
                    is lightweight. Due to the fact that this speech recognition
                    engine is online, it has little to no impact on the users'
                    machine performance, and this translates further into the
                    fact that users can use{" "}
                    <font className="bold_project_article_section_style">
                      Eva
                    </font>{" "}
                    even on lower powered devices. The aforementioned final
                    factor made me choose{" "}
                    <font className="bold_project_article_section_style">
                      Windows Media Speech Recognition
                    </font>{" "}
                    over free and open source on device speech recognition
                    engines to serve the role of the main speech recognition
                    engine. <br />
                    <br />
                    <br />
                    The implementation of{" "}
                    <font className="bold_project_article_section_style">
                      Windows Media Speech Recognition
                    </font>{" "}
                    is done in{" "}
                    <font className="bold_project_article_section_style">
                      C#
                    </font>{" "}
                    through the use of the{" "}
                    <font className="bold_project_article_section_style">
                      UWP
                    </font>{" "}
                    library named{" "}
                    <font className="bold_project_article_section_style">
                      Windows Media Speech Recognition
                    </font>
                    {". "}
                    The aforementioned{" "}
                    <font className="bold_project_article_section_style">
                      UWP
                    </font>{" "}
                    library allows{" "}
                    <font className="bold_project_article_section_style">
                      C#
                    </font>{" "}
                    applications to interact with the Windows 10/11 speech
                    recognition engine in order to be able to perform speech
                    recognition within{" "}
                    <font className="bold_project_article_section_style">
                      C#
                    </font>{" "}
                    applications. Due to the fact that{" "}
                    <font className="bold_project_article_section_style">
                      UWP
                    </font>{" "}
                    applications sandbox the application's operation, a
                    workarround had to be implemented.{" "}
                    <font className="bold_project_article_section_style">
                      UWP
                    </font>{" "}
                    applications are sandboxed, and this means that{" "}
                    <font className="bold_project_article_section_style">
                      UWP
                    </font>{" "}
                    applications cannot interact with the rest of the OS. This
                    security feature would be detremental to Eva because it has
                    to execute commands, many of which will imply the
                    interaction with the operating system. The workarround to
                    this sollution is to import{" "}
                    <font className="bold_project_article_section_style">
                      UWP
                    </font>{" "}
                    librabries and functionalities inside of another type of
                    application, which in this case is{" "}
                    <font className="bold_project_article_section_style">
                      WPF
                    </font>
                    {". "}This is done by downloading an{" "}
                    <font className="bold_project_article_section_style">
                      SDK
                    </font>
                    {". "} that contains the aforementioned librabries within
                    the{" "}
                    <font className="bold_project_article_section_style">
                      C#
                    </font>{" "}
                    application, named{" "}
                    <font className="bold_project_article_section_style">
                      Microsoft.Windows.SDK.Contracts
                    </font>
                    {". "}
                    <br />
                    <br />
                    <br />
                  </article>
                  <CodeSnippet
                    file={online_speech_recognition_file}
                    language="csharp"
                  />
                  <article className="project_article_style">
                    In the code snippet shown above is shown the implementation
                    of the online speech recognition engine in the{" "}
                    <font className="bold_project_article_section_style">
                      C#
                    </font>{" "}
                    main application.
                    <font className="bold_project_article_section_style"></font>{" "}
                  </article>
                  <article className="project_article_style">
                    The online speech recogniser's operation is fulfilled by a{" "}
                    <font className="bold_project_article_section_style">
                      Task{"<bool>"}
                    </font>{" "}
                    method named{" "}
                    <font className="bold_project_article_section_style">
                      Initiate_The_Online_Speech_Recognition_Engine()
                    </font>
                    . This is done in order to run the speech recognition
                    operation on a different thread within the application's
                    default thread pool in an asynchronous manner.
                  </article>
                  <CodeSnippet
                    file={online_speech_recogniser_method}
                    language="csharp"
                  />
                  <article className="project_article_style">
                    The online speech recogniser object is put inside a{" "}
                    <font className="bold_project_article_section_style">
                      using
                    </font>{" "}
                    statement in order ensure its deallocation from the{" "}
                    <font className="bold_project_article_section_style">
                      RAM
                    </font>{" "}
                    memory after the speech recognition operation finished. Its
                    active memory deallocation is performed by{" "}
                    <font className="bold_project_article_section_style">
                      Dispose()
                    </font>{" "}
                    method calls performed inside the method on the online
                    speech recogniser object.
                  </article>
                  <CodeSnippet
                    file={online_speech_recognition_object}
                    language="csharp"
                  />
                  <article className="project_article_style">
                    After the speech recogniser object is initiated, multiple
                    parameters are set regarding the way it is proceeding with
                    the speech recognition operation. The first set of
                    parameters set are the degree of accuracy with which the
                    operation is performed and the speech recogntion mode. The
                    degree of accuracy is set by using an enum inside the speech
                    recogniser library and assigning it to the{" "}
                    <font className="bold_project_article_section_style">
                      'Probability'
                    </font>{" "}
                    attribute of the speech recogniser object. Then the speech
                    recognition mode of operation is set by adding a{" "}
                    <font className="bold_project_article_section_style">
                      'SpeechRecognitionTopicConstraint'
                    </font>{" "}
                    object in the contraint list attribute field of the speech
                    recogniser object. The{" "}
                    <font className="bold_project_article_section_style">
                      'SpeechRecognitionTopicConstraint'
                    </font>{" "}
                    object has set as the mode of operation the speech
                    recognition mode{" "}
                    <font className="bold_project_article_section_style">
                      'web-search'
                    </font>{" "}
                    . This mode allows for words to be recognised in a manner
                    that is optimal for web search related tasks. After the
                    aformetioned parameters are set, a compilation of the
                    constraints is done in order to set the speech recogniser in
                    the previously mentioned speech recognition mode, by calling
                    the{" "}
                    <font className="bold_project_article_section_style">
                      CompileConstraintsAsync()
                    </font>{" "}
                    method.
                  </article>
                  <CodeSnippet
                    file={online_speech_recogniser_topic_constraints}
                    language="csharp"
                  />
                  <article className="project_article_style">
                    The final set of parameters set are the timeout proprieties
                    of the speech recognition engine. The timeots regarding the
                    interval of silence before the user is giving input and
                    background noise are set to 9 seconds.
                  </article>
                  <CodeSnippet
                    file={online_speech_recogniser_timeout_proprieties}
                    language="csharp"
                  />
                  <article className="project_article_style">
                    If the parameters mentioned above are successfully set, the
                    speech recogniser speech recognition operation is started by
                    calling the{" "}
                    <font className="bold_project_article_section_style">
                      RecognizeAsync()
                    </font>{" "}
                    method and storing the result of the operation in a{" "}
                    <font className="bold_project_article_section_style">
                      SpeechRecognitionResult
                    </font>{" "}
                    object.
                  </article>
                  <CodeSnippet
                    file={online_speech_recogniser_speech_recognition_operation}
                    language="csharp"
                  />
                  <article className="project_article_style">
                    If the operation is successful, the result string is
                    extracted from the aforementioned object and passed to a,
                    non-machine learning approach, natural language
                    understanding engine within the application.
                  </article>
                  {/* // END */}
                  <h2 className="project_sub_title_style">
                    Wake word engine control mechanism
                  </h2>
                  <article className="project_article_style">
                    The wake word engine is implemented in{" "}
                    <font className="bold_project_article_section_style">
                      Python
                    </font>{" "}
                    and the main application is implemented in{" "}
                    <font className="bold_project_article_section_style">
                      C#
                    </font>
                    , and as a result, the wake word engine must be run as a
                    child process of the main application. To do this a control
                    mechanism had to be implemented to control when the wake
                    word engine starts, stops, and how the information is
                    transmitted between the main application and the{" "}
                    <font className="bold_project_article_section_style">
                      Python
                    </font>{" "}
                    child process. When the wake word engine starts and stops is
                    controlled externally by the user by pressing the microphone
                    button in the application graphical user interface.
                  </article>
                  <img
                    className="description_image"
                    alt="microphone usage highlight"
                    src={Eva_Mic_Highlight}
                  />
                  <br />
                  <br />
                  <br />
                  <CodeSnippet
                    file={wake_word_engine_startup}
                    language="csharp"
                  />
                  <article className="project_article_style">
                    Internally, the main application is starting or stopping the
                    child process according to the user selected state. When the
                    user starts the application, the{" "}
                    <font className="bold_project_article_section_style">
                      Task{"<bool>"}
                    </font>{" "}
                    method{" "}
                    <font className="bold_project_article_section_style">
                      Start_The_Wake_Word_Engine()
                    </font>{" "}
                    is called in order to start the wake word engine process. A{" "}
                    <font className="bold_project_article_section_style">
                      Process
                    </font>{" "}
                    object is created in order to facilitate the initiation and
                    controll of the wake word engine to be started as a child
                    process. A multitude of parameters of the aforementioned
                    object are set in order to dictate the behaviour of the wake
                    word engine. A part of these parameters dictate that the
                    window of the child process must be hidden{" "}
                    <font className="bold_project_article_section_style">
                      ( inivisible )
                    </font>
                    , and the child process{" "}
                    <font className="bold_project_article_section_style">
                      STDIN
                    </font>
                    ,{" "}
                    <font className="bold_project_article_section_style">
                      STDOUT
                    </font>
                    ,{" "}
                    <font className="bold_project_article_section_style">
                      STDER
                    </font>{" "}
                    input/output streams should be redirected from the child
                    process to the OS, to the child process to the main
                    application. The aforemantioned fact translates further in
                    the fact that the input, output, and error messages of the
                    child process must be send or received to and from the main
                    application, not the OS itself. The rest of the parameters
                    dictate where is the location and file name of the process
                    to be started and the arguments used to initiate the
                    process. The file to be initiated as a process is the python
                    interpreter and the argument passed to it, which in this
                    situation is{" "}
                    <font className="bold_project_article_section_style">
                      main.py
                    </font>{" "}
                    is the name of the{" "}
                    <font className="bold_project_article_section_style">
                      Python
                    </font>{" "}
                    script that is used to run the wake word engine. In order to
                    run{" "}
                    <font className="bold_project_article_section_style">
                      Python
                    </font>{" "}
                    scripts inside the main application's environment a{" "}
                    <font className="bold_project_article_section_style">
                      Python
                    </font>{" "}
                    virual environment had to be created and multiple
                    dependencies such as the speech recognition library had to
                    be installed within this environment. The virtual
                    environment was created using the{" "}
                    <font className="bold_project_article_section_style">
                      python -m venv PATH_TO_APPLICATION
                    </font>{" "}
                    command inside the main application's directory.
                    <br />
                    <br />
                    <br />
                    In order to stop the wake word engine the{" "}
                    <font className="bold_project_article_section_style">
                      Task{"<bool>"}
                    </font>{" "}
                    method{" "}
                    <font className="bold_project_article_section_style">
                      python -m venv PATH_TO_APPLICATION
                    </font>{" "}
                    is called.
                  </article>
                  <article className="project_article_style">
                    To stop the{" "}
                    <font className="bold_project_article_section_style">
                      Python
                    </font>{" "}
                    sub-process the main{" "}
                    <font className="bold_project_article_section_style">
                      C#
                    </font>{" "}
                    application must interact with {"the "}
                    <font className="bold_project_article_section_style">
                      WMI (Windows Management Interface)
                    </font>
                    {". "}
                    {" The "}
                    <font className="bold_project_article_section_style">
                      WMI
                    </font>{" "}
                    is a management interface of the Windows operating system
                    through which processes and different aspects of the
                    operating system can be controlled through{" "}
                    <font className="bold_project_article_section_style">
                      SQL
                    </font>{" "}
                    queries given to this management interface. The{" "}
                    <font className="bold_project_article_section_style">
                      Task{"<bool>"}
                    </font>{" "}
                    method{" "}
                    <font className="bold_project_article_section_style">
                      Stop_The_Wake_Word_Engine
                    </font>{" "}
                    must be called in order to kill all child processes related
                    to the wake word engine's operation.
                  </article>
                  <CodeSnippet
                    file={wake_word_engine_shutdown}
                    language="csharp"
                  />
                  <h2 className="project_sub_title_style">
                    Natural language understanding engine
                  </h2>
                  <article className="project_article_style">
                    Eva uses a natural language understanding engine built using
                    a non-machine learning approach. It was built like this due
                    to the fact that it needs to understand a linited number of
                    commands, so using a machine learning approach will be
                    expensive from a computing point of view in relation with
                    the benefits provided.
                  </article>
                  <CodeSnippet
                    file={natural_language_understanding_engine}
                    language="csharp"
                  />
                  <article className="project_article_style">
                    The natural languge understanding engine has 3 stages, and
                    these are explained below. The pre-processing stage, is the
                    stage where the input data is verified for key tokens in
                    specific locations. For example let's take the command{" "}
                    <font className="bold_project_article_section_style">
                      'open chrome'
                    </font>{" "}
                    , becuase it is containg the token{" "}
                    <font className="bold_project_article_section_style">
                      'open'
                    </font>{" "}
                    and this token is the first token in the sentence, the
                    classifier establishes that the command parameter is{" "}
                    <font className="bold_project_article_section_style">
                      'open [ APPLICATION ]'
                    </font>{" "}
                    , which signals that the command to be executed will open an
                    application. The processing stage, is the stage where the
                    values required by the variables of the commands are
                    extracted. For example let's take the command parameter{" "}
                    <font className="bold_project_article_section_style">
                      'search [ CONTENT ] on [ WEB APPLICATION ]'
                    </font>
                    {". "} The variables in this case are{" "}
                    <font className="bold_project_article_section_style">
                      '[ CONTENT ]'
                    </font>{" "}
                    and{" "}
                    <font className="bold_project_article_section_style">
                      '[ WEB APPLICATION ]'
                    </font>
                    {". "} The engine must search for the values of this
                    variables at specified indexes and use them to execute the
                    command. The third and final stage is the post-processing
                    stage. In this stage the extracted values of the variables
                    are validated and processed in order for the command
                    associated with them to be executed.
                  </article>

                  <img
                    className="description_image"
                    alt="speech recognition mechanism"
                    src="https://user-images.githubusercontent.com/87245086/234992408-7ec94b0f-4b13-483a-8182-2a00b332d6af.png"
                  />

                  <article className="project_article_style">
                    The average and worst time compxity is{" "}
                    <font className="bold_project_article_section_style">
                      'O(N)'
                    </font>{" "}
                    becuase every character within the sentence must be
                    processed, in order for the command to be executed. The best
                    time complexity is{" "}
                    <font className="bold_project_article_section_style">
                      'O N - (N - (ci + 1))'
                    </font>
                    {", "}where{" "}
                    <font className="bold_project_article_section_style">
                      'ci'
                    </font>{" "}
                    is the current index where the input did not match any
                    command pattern or where the value of the variables did not
                    match any valid value.
                  </article>
                  {/* 
                  <article className="project_article_style">

                  </article> 


                  <div className="small_non_adjustable_image_container_style">
                    
                  </div>

                  <font className="bold_project_article_section_style">

                  </font>{" "}
                  

                  <h2 className="project_sub_title_style">

                  </h2>
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Terminal_Startup();
