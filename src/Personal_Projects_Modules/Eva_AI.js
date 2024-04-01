import CodeSnippet from "../CodeSnippet";
import { ProjectTitle, Link, Article, ProjectSubTitle, Font, LargeAdjustableImage, ProjectBody, SmallAdjustableImage, ArticleBody } from "../Components"

import "../Styles/personal_projects_style.css";
import "../Styles/main_style.css";

import { useEffect } from "react";

import Eva_Mic_Highlight from "../Images/Eva_Mic_Highlight.png";

import vosk_model from "../Images/Vosk_Model.png";
import python_vosk_file from "../Eva_Code_Snippets/python_vosk_file.txt";
import python_vosk_file_snippet_1 from "../Eva_Code_Snippets/python_vosk_file_snippet_1.txt";
import python_vosk_file_snippet_2 from "../Eva_Code_Snippets/python_vosk_file_snippet_2.txt";
import vosk_audio_processing_snippet from "../Eva_Code_Snippets/vosk_audio_processing_snippet.txt";
import online_speech_recognition_file from "../Eva_Code_Snippets/online_speech_recognition_file.txt";
import online_speech_recogniser_method from "../Eva_Code_Snippets/online_speech_recogniser_method.txt";
import online_speech_recognition_object from "../Eva_Code_Snippets/online_speech_recognition_object.txt";
import online_speech_recogniser_topic_constraints from "../Eva_Code_Snippets/online_speech_recogniser_topic_constraints.txt";
import online_speech_recogniser_timeout_proprieties from "../Eva_Code_Snippets/online_speech_recogniser_timeout_proprieties.txt";
import online_speech_recogniser_speech_recognition_operation from "../Eva_Code_Snippets/online_speech_recogniser_speech_recognition_operation.txt";
import wake_word_engine_startup from "../Eva_Code_Snippets/wake_word_engine_startup.txt";
import wake_word_engine_shutdown from "../Eva_Code_Snippets/wake_word_engine_shutdown.txt";
import natural_language_understanding_engine from "../Eva_Code_Snippets/natural_language_understanding_engine.txt";
import Terminal from "../Terminal";

export default function Render_EVA_AI_Page() {
  return (
    <ProjectBody>
      <Terminal size={"large"}>
        <ProjectTitle>
          Eva the A.I assistant
        </ProjectTitle>
        
        <ProjectSubTitle>
            Introduction
          </ProjectSubTitle>

          <Article>
            Eva is an AI assistant built with the purpose of helping
            users multitask. Eva is constructed using a set of different
            technologies and techniques explained in detail in this
            article. You can find the code for {"Eva "}
            <Link link={"https://github.com/CSharpTeoMan911/Eva"}>
              here
            </Link>
            . If you wish to download Eva as a standalone application,
            you can find the installer{" "}
            <Link link={"https://sourceforge.net/projects/eva-ai/"}>
              here
            </Link>.
          </Article>

          {/* // END */}
          {/* Tech stack section
                  //
                  // [ BEGIN ] */}
          <ProjectSubTitle>
            Tech stack
          </ProjectSubTitle>
          <Article>
            <Font>
              Eva
            </Font>{" "}
            is built using a combination of{" "}
            <Font>
              .NET Framework
            </Font>,{" "}
            <Font>
              WPF
            </Font>, and{" "}
            <Font>
              Python
            </Font>. This combination of technologies is very powerful due to
            the fact that the{" "}<Font>
              .NET Framework
            </Font>{" "} offers functionalities that give complete control of the
            Windows ecosystem to the application,
            <Font>
              {" "}
              WPF
            </Font>{" "}
            offers beautiful GUI graphics, complete control over the
            application's layout, and great stability,{" "}
            <Font>
              C#
            </Font>{" "}offers a rich variety of librabries with different purposes
            and functionalities. After a careful analysis, the
            functionalities of this tech stack can be categorised in 3
            main categories: Windows functionalities, information
            processing functionalities, and extra functionalities. Each
            component of the tech stack is part of one or more
            categories, and the classification is the following:{" "}
            <Font>
              .NET Framework
            </Font>{" and "}<Font>
              WPF
            </Font>{" "}belong to the Windows functionality category,{" "}
            <Font>
              Python
            </Font>{" "}is categorized as part of the additional functionalities
            category.
          </Article>



          <ProjectSubTitle>
            Speech recognition infrastructure
          </ProjectSubTitle>
          <Article>
            The speech recognition infrastructure is implemented using
            two technologies:{" "}<Font>
              Windows Media Speech Recognition
            </Font>{" "}and{" "}<Font>
              Vosk
            </Font>{" "}
            speech recognition.{" "}<Font>
              Vosk
            </Font>{" "}
            serves as the wake word engine, while{" "}
            <Font>
              Windows Media Speech Recognition
            </Font>{" "}
            functions as the main speech recognition engine for the
            application.
          </Article>


          <LargeAdjustableImage src={"https://user-images.githubusercontent.com/87245086/234708319-0ad38208-afe3-460c-9066-224704151b20.png"} />

          <Article>
            <Font>
              Vosk
            </Font>{" "}
            is utilized as the wake word engine for the application.
            When{" "}<Font>
              Vosk
            </Font>{" "}detects the wake word{" "}
            <Font>
              'listen'
            </Font>{" ,"} or the wake phrase{" "}
            <Font>
              'hey listen'
            </Font>{" "}
            the wake word engine will send a message to the main
            application via the OS kernel{" "}<Font>
              'STDOUT'
            </Font>{" "}stream to activate the{" "}
            <Font>
              Windows Media Speech Recognition
            </Font>{" "}
            for processing voice commands.
          </Article>




          <ProjectSubTitle>
            Vosk speech recognition
          </ProjectSubTitle>
          <Article>
            <Font>
              Vosk
            </Font>{" "}
            is an open-source speech recognition engine that can be
            integrated into applications to handle speech recognition
            tasks. The decision to use{" "}
            <Font>
              Vosk
            </Font>{" "}
            as the offline wake word engine was based on several key
            factors. After carefully considering the need for the
            application's wake word engine to be lightweight, fast, and
            accurate, and after numerous implementations of various
            speech recognition engines, the results consistently pointed
            to{" "}<Font>
              Vosk
            </Font>{" "}
            as the optimal choice for an offline wake word engine.
          </Article>
          <LargeAdjustableImage src={vosk_model} />
          <Article>
            The model used by the{" "}<Font>
              Vosk
            </Font>{" "}
            wake word configuration is the 40MB model, as it is the
            smallest. This choice minimizes the impact on the user's
            machine in terms of CPU, RAM, and GPU usage while also
            ensuring the fastest processing and response times—essential
            characteristics for a wake word engine. The wake word engine
            is implemented in Python using the{" "}
            <Font>
              'vosk api'
            </Font>{" "}
            Python package.
          </Article>



          <CodeSnippet file={python_vosk_file} language={"python"} />

          <Article>
            As it is visible in the code snippet shown above, the Python
            script is composed out of two main methods, the{" "}
            <Font>
              'Wake_Word_Engine_Thread_Management'
            </Font>{" "}
            function and the{" "}<Font>
              'wake_word_operation_stdout_stream'
            </Font>{" "}function. The{" "}
            <Font>
              'Wake_Word_Engine_Thread_Management'
            </Font>{" "}
            function is responsible for the initiation of the wake word
            engine, the speech recognition model load, and the wake word
            detection opertions. In order for the speech recognition
            model to be loaded in the speech recognition engine, the
            path of the speech recognition model is extracted, passed to
            the constructor of a{" "}<Font>
              Vosk
            </Font>{" "}
            library specific class, called{" "}
            <Font>
              Model
            </Font>
            , which is subsequently stored inside a variable. Then, the
            Vosk speech recognizer is initated as an object called{" "}
            <Font>
              KaldiRecognizer
            </Font>, to which the aforementioned{" "}
            <Font>
              KaldiRecognizer
            </Font>, to which the aforementioned{" "}
            <Font>
              Model
            </Font>{" "}
            object along with the frequency at which the wake word
            engine will operate, are passed within its constructor. The{" "}
            <Font>
              'vosk api'
            </Font>{" "}
            library uses the{" "}
            <Font>
              'Kaldi'
            </Font>{" "}
            speech recognition engine as a wrapper in order to operate.
            After the speech recognition engine is initiated, a{" "}
            <Font>
              'Pyaudio'
            </Font>{" "}
            object is created. The{" "}
            <Font>
              'Pyaudio'
            </Font>{" "}
            library is used here in order to extract audio information
            from the main audio input stream that will be further
            processed by the speech recognition engine to perform speech
            to text conversion and wake word detection. The{" "}
            <Font>
              'Pyaudio'
            </Font>
            {" "}
            object's operation is initiated by calling the{" "}
            <Font>
              'open{"()"}'
            </Font>{" "}
            method and passing in as parameters of the method the number
            of audio channels, the audio format encoding{" "}
            <Font>
              {"("} which in this scenario is a 16 bits audio format{" "}
              {")"}
            </Font>, the sample rate{" "}
            <Font>
              {"("} which is the same as the frequency of the speech
              recognition engine '16000 hz' {")"}
            </Font>, the number of frames that the buffer should store{" "}
            <Font>
              {"("} which is '300hz' {")"}
            </Font>, and a boolean that signals if{" "}
            <Font>
              'Pyaudio'
            </Font>{" "}
            should extract the data from the device's main input audio
            stream{" "}
            <Font>
              {"("} the device's microphone {")"}
            </Font>.
          </Article>



          <CodeSnippet
            file={vosk_audio_processing_snippet}
            language={"python"}
          />

          <Article>
            After the audio stream is initialised and started, a while
            loop starts in order to process all the audio data read by
            the{" "}
            <Font>
              'Pyaudio'
            </Font>{" "}
            object, pass the audio data to the speech recogniser, and
            detect the set wake word. Within the aforementioned loop,
            the data from the{" "}
            <Font>
              'Pyaudio'
            </Font>{" "}
            stream is read in chunks of{" "}
            <Font>
              300hz
            </Font>{" "}
            each iteration. Then the audio data is passed to the speech
            recogniser, which will verify if the wake word is present in
            the pre-processed data and post-processed data. In order to
            ensure the lowest degree of latency, the speech recogniser
            is verifying its pre-processed data and post-processed data
            and if a wake word is detected, the method{" "}
            <Font>
              'wake_word_operation_stdout_stream{"()"}'
            </Font>is called in order to send the activation message to the
            main{" "}
            <Font>
              C#
            </Font>{" "}
            application through the{" "}
            <Font>
              STDOUT
            </Font>{" "}
            stream.
          </Article>


          <CodeSnippet
            file={python_vosk_file_snippet_1}
            language={"python"}
          />

          <Article>
            Whitin the{" "}
            <Font>
              'wake_word_operation_stdout_stream{"()"}'
            </Font>{" "}
            method, a switch statement detects if the message sent to
            the main{" "}
            <Font>
              C#
            </Font>{" "}
            application should be one that stops the speech recognition
            opertion, or one that starts the speech recognition
            operation. After the decision is made, the message is sent
            through{" "}
            <Font>
              STDIN
            </Font>{" "}
            stream by using a print statement containing the message.
          </Article>


          <CodeSnippet
            file={python_vosk_file_snippet_2}
            language={"python"}
          />



          <ProjectSubTitle>
            Windows Media Speech Recognition
          </ProjectSubTitle>
          <Article>
            <Font>
              Windows Media Speech Recognition
            </Font>{" "}
            is a closed source online speech recongition engine
            developed by{" "}
            <Font>
              Mircosoft
            </Font>
            {". "}This online speech recognition engine was chosen as
            the main speech recognition engine due to multiple factors.
            The first factor is the fact that is free. The{" "}
            <Font>
              Windows Media Speech Recognition
            </Font>{" "}
            engine is the only online speech recognition engine
            available to use free of charge and that has a high degree
            of accuracy. The second factor why the{" "}
            <Font>
              Windows Media Speech Recognition
            </Font>{" "}
            was chosen as the main speech recognition engine is due to
            its availability.{" "}
            <Font>
              Windows Media Speech Recognition
            </Font>{" "}
            comes shipped with the Windows 10/11 OS, and this means that
            anyone that has a Windows 10/11 OS can access it. The third
            and final reason is that{" "}
            <Font>
              Windows Media Speech Recognition
            </Font>{" "}
            is lightweight. Due to the fact that this speech recognition
            engine is online, it has little to no impact on the users'
            machine performance, and this translates further into the
            fact that users can use{" "}
            <Font>
              Eva
            </Font>{" "}
            even on lower powered devices. The aforementioned final
            factor made me choose{" "}
            <Font>
              Windows Media Speech Recognition
            </Font>{" "}
            over free and open source on device speech recognition
            engines to serve the role of the main speech recognition
            engine. <br />
            <br />
            <br />
            The implementation of{" "}
            <Font>
              Windows Media Speech Recognition
            </Font>{" "}
            is done in{" "}
            <Font>
              C#
            </Font>{" "}
            through the use of the{" "}
            <Font>
              UWP
            </Font>{" "}
            library named{" "}
            <Font>
              Windows Media Speech Recognition
            </Font>{". "}
            The aforementioned{" "}
            <Font>
              UWP
            </Font>{" "}
            library allows{" "}
            <Font>
              C#
            </Font>{" "}
            applications to interact with the Windows 10/11 speech
            recognition engine in order to be able to perform speech
            recognition within{" "}
            <Font>
              C#
            </Font>{" "}
            applications. Due to the fact that{" "}
            <Font>
              UWP
            </Font>{" "}
            applications sandbox the application's operation, a
            workarround had to be implemented.{" "}
            <Font>
              UWP
            </Font>{" "}
            applications are sandboxed, and this means that{" "}
            <Font>
              UWP
            </Font>{" "}
            applications cannot interact with the rest of the OS. This
            security feature would be detremental to Eva because it has
            to execute commands, many of which will imply the
            interaction with the operating system. The workarround to
            this sollution is to import{" "}
            <Font>
              UWP
            </Font>{" "}
            librabries and functionalities inside of another type of
            application, which in this case is{" "}
            <Font>
              WPF
            </Font>{". "}This is done by downloading an{" "}
            <Font>
              SDK
            </Font>{". "} that contains the aforementioned librabries within
            the{" "}
            <Font>
              C#
            </Font>{" "}
            application, named{" "}
            <Font>
              Microsoft.Windows.SDK.Contracts
            </Font>
            {". "}
            <br />
            <br />
            <br />
          </Article>

          <CodeSnippet
            file={online_speech_recognition_file}
            language="csharp"
          />

          <Article>
            In the code snippet shown above is shown the implementation
            of the online speech recognition engine in the{" "}
            <Font>
              C#
            </Font>{" "}
            main application.{" "}
            The online speech recogniser's operation is fulfilled by a{" "}
            <Font>
              Task{"<bool>"}
            </Font>{" "}
            method named{" "}
            <Font>
              Initiate_The_Online_Speech_Recognition_Engine()
            </Font>.
          </Article>
          <Article>
            This is done in order to run the speech recognition
            operation on a different thread within the application's
            default thread pool in an asynchronous manner.
          </Article>

          <CodeSnippet
            file={online_speech_recogniser_method}
            language="csharp"
          />

          <Article>
            The online speech recogniser object is put inside a{" "}
            <Font>
              using
            </Font>{" "}
            statement in order ensure its deallocation from the{" "}
            <Font>
              RAM
            </Font>{" "}
            memory after the speech recognition operation finished. Its
            active memory deallocation is performed by{" "}
            <Font>
              Dispose()
            </Font>{" "}
            method calls performed inside the method on the online
            speech recogniser object.
          </Article>

          <CodeSnippet
            file={online_speech_recognition_object}
            language="csharp"
          />

          <Article>
            After the speech recogniser object is initiated, multiple
            parameters are set regarding the way it is proceeding with
            the speech recognition operation. The first set of
            parameters set are the degree of accuracy with which the
            operation is performed and the speech recogntion mode. The
            degree of accuracy is set by using an enum inside the speech
            recogniser library and assigning it to the{" "}
            <Font>
              'Probability'
            </Font>{" "}
            attribute of the speech recogniser object. Then the speech
            recognition mode of operation is set by adding a{" "}
            <Font>
              'SpeechRecognitionTopicConstraint'
            </Font>{" "}
            object in the contraint list attribute field of the speech
            recogniser object. The{" "}
            <Font>
              'SpeechRecognitionTopicConstraint'
            </Font>{" "}
            object has set as the mode of operation the speech
            recognition mode{" "}
            <Font>
              'web-search'
            </Font>{" "}
            . This mode allows for words to be recognised in a manner
            that is optimal for web search related tasks. After the
            aformetioned parameters are set, a compilation of the
            constraints is done in order to set the speech recogniser in
            the previously mentioned speech recognition mode, by calling
            the{" "}
            <Font>
              CompileConstraintsAsync()
            </Font>{" "}
            method.
          </Article>

          <CodeSnippet
            file={online_speech_recogniser_topic_constraints}
            language="csharp"
          />

          <Article>
            The final set of parameters set are the timeout proprieties
            of the speech recognition engine. The timeots regarding the
            interval of silence before the user is giving input and
            background noise are set to 9 seconds.
          </Article>

          <CodeSnippet
            file={online_speech_recogniser_timeout_proprieties}
            language="csharp"
          />

          <Article>
            If the parameters mentioned above are successfully set, the
            speech recogniser speech recognition operation is started by
            calling the{" "}
            <Font>
              RecognizeAsync()
            </Font>{" "}
            method and storing the result of the operation in a{" "}
            <Font>
              SpeechRecognitionResult
            </Font>{" "}
            object.
          </Article>

          <CodeSnippet
            file={online_speech_recogniser_speech_recognition_operation}
            language="csharp"
          />

          <Article>
            If the operation is successful, the result string is
            extracted from the aforementioned object and passed to a,
            non-machine learning approach, natural language
            understanding engine within the application.
          </Article>

          <ProjectSubTitle>
            Wake word engine control mechanism
          </ProjectSubTitle>
          <Article>
            The wake word engine is implemented in{" "}
            <Font>
              Python
            </Font>{" "}
            and the main application is implemented in{" "}
            <Font>
              C#
            </Font>, and as a result, the wake word engine must be run as a
            child process of the main application. To do this a control
            mechanism had to be implemented to control when the wake
            word engine starts, stops, and how the information is
            transmitted between the main application and the{" "}
            <Font>
              Python
            </Font>{" "}
            child process. When the wake word engine starts and stops is
            controlled externally by the user by pressing the microphone
            button in the application graphical user interface.
          </Article>

          <SmallAdjustableImage src={Eva_Mic_Highlight} alt={"microphone usage highlight"} />

          <br />
          <br />
          <br />

          <CodeSnippet
            file={wake_word_engine_startup}
            language="csharp"
          />

          <Article>
            Internally, the main application is starting or stopping the
            child process according to the user selected state. When the
            user starts the application, the{" "}
            <Font>
              Task{"<bool>"}
            </Font>{" "}
            method{" "}
            <Font>
              Start_The_Wake_Word_Engine()
            </Font>{" "}
            is called in order to start the wake word engine process. A{" "}
            <Font>
              Process
            </Font>{" "}
            object is created in order to facilitate the initiation and
            controll of the wake word engine to be started as a child
            process. A multitude of parameters of the aforementioned
            object are set in order to dictate the behaviour of the wake
            word engine. A part of these parameters dictate that the
            window of the child process must be hidden{" "}
            <Font>
              ( inivisible )
            </Font>
            , and the child process{" "}
            <Font>
              STDIN
            </Font>,{" "}
            <Font>
              STDOUT
            </Font>,{" "}
            <Font>
              STDER
            </Font>{" "}
            input/output streams should be redirected from the child
            process to the OS, to the child process to the main
            application. The aforementioned fact translates further in
            the fact that the input, output, and error messages of the
            child process must be send or received to and from the main
            application, not the OS itself. The rest of the parameters
            dictate where is the location and file name of the process
            to be started and the arguments used to initiate the
            process. The file to be initiated as a process is the python
            interpreter and the argument passed to it, which in this
            situation is{" "}
            <Font>
              main.py
            </Font>{" "}
            is the name of the{" "}
            <Font>
              Python
            </Font>{" "}
            script that is used to run the wake word engine. In order to
            run{" "}
            <Font>
              Python
            </Font>{" "}
            scripts inside the main application's environment a{" "}
            <Font>
              Python
            </Font>{" "}
            virual environment had to be created and multiple
            dependencies such as the speech recognition library had to
            be installed within this environment. The virtual
            environment was created using the{" "}
            <Font>
              python -m venv PATH_TO_APPLICATION
            </Font>{" "}
            command inside the main application's directory.
            <br />
            <br />
            <br />
            In order to stop the wake word engine the{" "}
            <Font>
              Task{"<bool>"}
            </Font>{" "}
            method{" "}
            <Font>
              python -m venv PATH_TO_APPLICATION
            </Font>{" "}
            is called.
          </Article>

          <Article>
            To stop the{" "}
            <Font>
              Python
            </Font>{" "}
            sub-process the main{" "}
            <Font>
              C#
            </Font>{" "}
            application must interact with {"the "}
            <Font>
              WMI (Windows Management Interface)
            </Font>            {". "}
            {" The "}
            <Font>
              WMI
            </Font>{" "}
            is a management interface of the Windows operating system
            through which processes and different aspects of the
            operating system can be controlled through{" "}
            <Font>
              SQL
            </Font>{" "}
            queries given to this management interface. The{" "}
            <Font>
              Task{"<bool>"}
            </Font>{" "}
            method{" "}
            <Font>
              Stop_The_Wake_Word_Engine
            </Font>{" "}
            must be called in order to kill all child processes related
            to the wake word engine's operation.
          </Article>

          <CodeSnippet
            file={wake_word_engine_shutdown}
            language="csharp"
          />

          <ProjectSubTitle>
            Natural language understanding engine
          </ProjectSubTitle>
          <Article>
            Eva uses a natural language understanding engine built using
            a non-machine learning approach. It was built like this due
            to the fact that it needs to understand a linited number of
            commands, so using a machine learning approach will be
            expensive from a computing point of view in relation with
            the benefits provided.
          </Article>
          <CodeSnippet
            file={natural_language_understanding_engine}
            language="csharp"
          />
          <Article>
            The natural languge understanding engine has 3 stages, and
            these are explained below. The pre-processing stage, is the
            stage where the input data is verified for key tokens in
            specific locations. For example let's take the command{" "}
            <Font>
              'open chrome'
            </Font>{" "}
            , becuase it is containg the token{" "}
            <Font>
              'open'
            </Font>{" "}
            and this token is the first token in the sentence, the
            classifier establishes that the command parameter is{" "}
            <Font>
              'open [ APPLICATION ]'
            </Font>{" "}
            , which signals that the command to be executed will open an
            application. The processing stage, is the stage where the
            values required by the variables of the commands are
            extracted. For example let's take the command parameter{" "}
            <Font>
              'search [ CONTENT ] on [ WEB APPLICATION ]'
            </Font>{". "} The variables in this case are{" "}
            <Font>
              '[ CONTENT ]'
            </Font>{" "}
            and{" "}
            <Font>
              '[ WEB APPLICATION ]'
            </Font>{". "} The engine must search for the values of this
            variables at specified indexes and use them to execute the
            command. The third and final stage is the post-processing
            stage. In this stage the extracted values of the variables
            are validated and processed in order for the command
            associated with them to be executed.
          </Article>

          <SmallAdjustableImage src={"https://user-images.githubusercontent.com/87245086/234992408-7ec94b0f-4b13-483a-8182-2a00b332d6af.png"} alt={"speech recognition mechanism"} />

          <Article>
            The average and worst time compxity is{" "}
            <Font>
              'O(N)'
            </Font>{" "}
            becuase every character within the sentence must be
            processed, in order for the command to be executed. The best
            time complexity is{" "}
            <Font>
            'O N - (N - (ci + 1))'
            </Font>{", "}where{" "}
            <Font>
            'ci'
            </Font>{" "}
            is the current index where the input did not match any
            command pattern or where the value of the variables did not
            match any valid value.
          </Article>

        <div className="project_article_div_style">




        </div>
      </Terminal>
    </ProjectBody>
  );
}

