import CodeSnippet from "./CodeSnippet";
import { Terminal_Startup } from "./GUI_Animations";
import PageUnderDevelopment from "./PageUnderDevelopment";

import "./Styles/personal_projects_style.css";
import "./Styles/main_style.css";

import Y2F_main_application_interface from "./Y2F_Code_Snippets/Y2F_main_application_interface.txt";
import Y2F_YouTube_video_download from "./Y2F_Code_Snippets/Y2F_YouTube_video_download.txt";
import Y2F_video_conversion from "./Y2F_Code_Snippets/Y2F_video_conversion.txt";
import Y2F_main_entry_point from "./Y2F_Code_Snippets/Y2F_main_entry_point.txt";
import Y2F_YouTube_operations from "./Y2F_Code_Snippets/Y2F_YouTube_operations.txt";
import Y2F_setup from "./Y2F_Code_Snippets/Y2F_setup.txt";

export default function Render_Y2F() {
  return (
    <div className="main_page_div_style">
      <div className="project_div_style">
        <div id="personal_details_div" className="personal_details_div_style">
          <div id="crt_div_screen" className="crt_div_screen_style">
            <div id="crt_div" className="crt_div_style">
              <div className="crt_content_div_style">
                <div className="project_name_container_style">
                  <h1 className="project_name_style">
                    Y2F cross platform command line utility
                  </h1>
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
                    Y2F is a command line utility that has the purpose of
                    downloading YouTube videos as MP4 videos, or converting them
                    to a MP3 audio file and downloading them. You can find the
                    code for {"Y2F "}
                    <a
                      className="link_style"
                      href="https://github.com/CSharpTeoMan911/Y2F/tree/master"
                    >
                      here
                    </a>
                    . If you want to download Y2F as a standalone application,
                    you can download it via{" "}
                    <font className="bold_project_article_section_style">
                      PIP
                    </font>{" "}
                    using the{" "}
                    <font className="bold_project_article_section_style">
                      'pip install Y2F'
                    </font>{" "}
                    command.
                  </article>
                  {/* // END */}
                  <h2 className="project_sub_title_style">Program structure</h2>
                  <article className="project_article_style">
                    The application's structure is divided into 3{" "}
                    <font className="bold_project_article_section_style">
                      Python
                    </font>{" "}
                    modules. The aforementioned modules are divided into 3
                    functionality categories, and these are: application
                    control, GUI, and YouTube functionalities. The application's
                    folder structure is divided into 2 components, the{" "}
                    <font className="bold_project_article_section_style">
                      Python
                    </font>{" "}
                    application package, and the setup module. The application
                    follows this structure becuase it is distributed as a{" "}
                    <font className="bold_project_article_section_style">
                      PIP
                    </font>{" "}
                    package, and thus a setup module has to be instantiated.
                  </article>
                  <h2 className="project_sub_title_style">
                    Application PIP distribution
                  </h2>
                  <article className="project_article_style">
                    In order to build the application{" "}
                    <font className="bold_project_article_section_style">
                      PIP
                    </font>{" "}
                    module, firstly the{" "}
                    <font className="bold_project_article_section_style">
                      'setuptools'
                    </font>{" "}
                    module had to be installed by using the{" "}
                    <font className="bold_project_article_section_style">
                      'pip install setuptools'
                    </font>{" "}
                    command. This module is necessary because it provides
                    utilities that allow the application when is downloaded as a
                    package by users, to be able to detect its internal and
                    external dependencies and download them if necessary.
                    Internal dependencies are modules that are part of the
                    program itself and external dependencies are dependencies
                    that are not part of the program, but they need to be
                    installed because the program functionalities depend on
                    them.
                  </article>
                  <CodeSnippet file={Y2F_setup} language={"python"} />
                  <article className="project_article_style">
                    The setup file uses the{" "}
                    <font className="bold_project_article_section_style">
                      'setup()'
                    </font>{" "}
                    function of the{" "}
                    <font className="bold_project_article_section_style">
                      'setuptools'
                    </font>{" "}
                    module as the core functionality through which the setup is
                    made. Within it multiple parameters are passed, which
                    subsequently, define the proprieties of the package as a
                    whole. {"The "}
                    <font className="bold_project_article_section_style">
                      'name'
                    </font>{" "}
                    propriety defines the name of the package, the{" "}
                    <font className="bold_project_article_section_style">
                      'version'
                    </font>{" "}
                    propriety defines the current version of the package used
                    for version control, and the{" "}
                    <font className="bold_project_article_section_style">
                      'packages'
                    </font>{" "}
                    parameter defines the internal dependencies needed by the
                    package itself. The internal dependencies are automatically
                    extracted from the application's module using the{" "}
                    <font className="bold_project_article_section_style">
                      'find_packages()'
                    </font>{" "}
                    method of the{" "}
                    <font className="bold_project_article_section_style">
                      'setuptools'
                    </font>{" "}
                    module. The rest of parameters defined are {" the "}
                    <font className="bold_project_article_section_style">
                      'description'
                    </font>{" "}
                    parameter which contains the application's description,
                    {" the "}
                    <font className="bold_project_article_section_style">
                      'author_email'
                    </font>{" "}
                    parameter which contains the email of the package author,
                    the{" "}
                    <font className="bold_project_article_section_style">
                      'url'
                    </font>{" "}
                    parameter which contains the url where the project's code is
                    hosted, the{" "}
                    <font className="bold_project_article_section_style">
                      'install_requires'
                    </font>{" "}
                    parameter, which defines the external dependencies that need
                    to be installed, and the{" "}
                    <font className="bold_project_article_section_style">
                      'entry_points'
                    </font>{" "}
                    parameter, which describe the entry point of the
                    application. The entry point of the application must be
                    specified in order for the application to know which intenal
                    module and function within the specified module must be used
                    in order to initialise the application. The aforementioned
                    entry point must be specified as a string in the format{" "}
                    <font className="bold_project_article_section_style">
                      'console_scripts': [ 'Y2F=Y2F_PACKAGE.main:main', ]
                    </font>
                    {". "} The{" "}
                    <font className="bold_project_article_section_style">
                      'console_scripts'
                    </font>{" "}
                    parameter defines the scripts to be executed associated with
                    the package when an OS environment variable is invoked,
                    which in this case the only environment variable is{" "}
                    <font className="bold_project_article_section_style">
                      'Y2F'
                    </font>
                    . The value of this environment variable is set to be{" "}
                    <font className="bold_project_article_section_style">
                      'Y2F=Y2F_PACKAGE.main:main'
                    </font>{" "}
                    which means that when {" the "}
                    <font className="bold_project_article_section_style">
                      'Y2F'
                    </font>{" "}
                    environment variable is inserted in the terminal, the script
                    associated with it that is within the{" "}
                    <font className="bold_project_article_section_style">
                      'Y2F_PACKAGE'
                    </font>{" "}
                    directory, within the{" "}
                    <font className="bold_project_article_section_style">
                      'main.py'
                    </font>{" "}
                    module, and initiated with the{" "}
                    <font className="bold_project_article_section_style">
                      'main()'
                    </font>{" "}
                    function must be started. In order to publish the package as
                    a{" "}
                    <font className="bold_project_article_section_style">
                      'PIP'
                    </font>{" "}
                    repository, the application must be compressed as a{" "}
                    <font className="bold_project_article_section_style">
                      'tar.gz'
                    </font>{" "}
                    archive {" and "}
                    <font className="bold_project_article_section_style">
                      'PIP'
                    </font>{" "}
                    specific configuration files required must be created. The
                    application must be compressed as a{" "}
                    <font className="bold_project_article_section_style">
                      'tar.gz'
                    </font>{" "}
                    archive because is required by{" "}
                    <font className="bold_project_article_section_style">
                      'PIP'
                    </font>{" "}
                    in order to store the module. When the module is installed
                    by a user, the archive will be decompressed within the users
                    machines. The compression and{" "}
                    <font className="bold_project_article_section_style">
                      'PIP'
                    </font>{" "}
                    specific configuration files are created by using the
                    command{" "}
                    <font className="bold_project_article_section_style">
                      'python setup.py sdist bdist_wheel'
                    </font>{" "}
                    within the directory where the module's setup file is
                    located. In order for the module to be published as a{" "}
                    <font className="bold_project_article_section_style">
                      'PIP'
                    </font>{" "}
                    repository the command{" "}
                    <font className="bold_project_article_section_style">
                      'twine upload dist/*'
                    </font>{" "}
                    must be called and where{" "}
                    <font className="bold_project_article_section_style">
                      '/*'
                    </font>{" "}
                    means that everythin within the current directory must be
                    uploaded recursively.
                  </article>
                  <h2 className="project_sub_title_style">
                    Application control module
                  </h2>
                  <article className="project_article_style">
                    The application is initiated within the aforementioned{" "}
                    <font className="bold_project_article_section_style">
                      'main()'
                    </font>{" "}
                    function.
                  </article>
                  {/* <h2 className="project_sub_title_style">
                   Application structure
                 </h2>
                 <article className="project_article_style"></article> */}
                  <CodeSnippet
                    file={Y2F_main_application_interface}
                    language={"python"}
                  />
                  <article className="project_article_style">
                    Within this function, the program's operation is initialised
                    asynchronously using the function{" "}
                    <font className="bold_project_article_section_style">
                      'run()'
                    </font>{" "}
                    of the{" "}
                    <font className="bold_project_article_section_style">
                      'asyncio'
                    </font>{" "}
                    library and passing to this function as a parameter, the
                    name of the method which will be the initiation point for
                    all asynchronous operations within the program.
                  </article>
                  <CodeSnippet
                    file={Y2F_main_entry_point}
                    language={"python"}
                  />
                  <article className="project_article_style">
                    Within this entry point, a GUI component is loaded
                    asynchronously and input is extracted from the user. After
                    the input is extracted, a conditional statement block is
                    verifying if the YouTube video download operation is
                    selected or if the the YouTube video conversion opertion is
                    selected or if the application shutdown operation is
                    selected, and execute the selected operation accordingly. If
                    none of the before mentioned operations are selected, the
                    function will perform conditional recursion and re-initiate
                    the operation selection process.
                  </article>
                  <CodeSnippet
                    file={Y2F_YouTube_video_download}
                    language={"python"}
                  />
                  <article className="project_article_style">
                    The YouTube video download operation is controlled by the
                    function{" "}
                    <font className="bold_project_article_section_style">
                      Youtube_Download()
                    </font>
                    . Within it input is taken from the user multiple times and
                    that require the user to give the URL of the YouTube video
                    to be downloaded, the desired video resolution, and the path
                    where the video will be saved. If the user gives as input{" "}
                    <font className="bold_project_article_section_style">
                      '_BACK'
                    </font>{" "}
                    in any instance where input is required, the function will
                    call back the main entry point function without performing
                    the operation, signaling the decision of the user to cancel
                    the opeation.
                  </article>

                  <CodeSnippet
                    file={Y2F_video_conversion}
                    language={"python"}
                  />

                  <article className="project_article_style">
                    The YouTube video conversion operation is controlled by the
                    function{" "}
                    <font className="bold_project_article_section_style">
                      Youtube_Conversion()
                    </font>
                    . Within it input is taken from the user multiple times and
                    that require the user to give the URL of the YouTube video
                    to be downloaded and the path where the video will be saved.
                    As in the previously explained operation, if the user gives
                    as input{" "}
                    <font className="bold_project_article_section_style">
                      '_BACK'
                    </font>{" "}
                    in any instance where input is required, the function will
                    call back the main entry point function without performing
                    the operation, signaling the decision of the user to cancel
                    the opeation. Both of the operations showcased previously
                    will call the{" "}
                    <font className="bold_project_article_section_style">
                      'Message_Displayer()'
                    </font>{" "}
                    function to process the result of the operations to process
                    and display the corresponding message related to the
                    operation's result.
                  </article>

                  <h2 className="project_sub_title_style">
                    YouTube Operations
                  </h2>

                  <article className="project_article_style">
                    The YouTube video conversion and download operations are
                    performed by the class{" "}
                    <font className="bold_project_article_section_style">
                      'Operations'
                    </font>
                    . When the class is initialised it asks multiple parameters
                    that will be used for the operations. The parameters given
                    to the class will be stored locally for processing by the
                    class initialiser/constructor{" "}
                    <font className="bold_project_article_section_style">
                      ('__init__')
                    </font>
                    . The{" "}
                    <font className="bold_project_article_section_style">
                      Operation_Selection()
                    </font>{" "}
                    method is used to initate any operation within this class
                    and the decision which operation to initiatiate is performed
                    with the help of a boolean variable given within the class
                    initiator, that dictates if the YouTube video is downloaded
                    as an audio only file or not.
                  </article>

                  <CodeSnippet
                    file={Y2F_YouTube_operations}
                    language={"python"}
                  />

                  <article className="project_article_style">
                    The{" "}
                    <font className="bold_project_article_section_style">
                      Operation_Selection()
                    </font>{" "}
                    method will subsequently call the The{" "}
                    <font className="bold_project_article_section_style">
                      __Youtube_Download()
                    </font>{" "}
                    method which will perform the selected operation. The{" "}
                    <font className="bold_project_article_section_style">
                      __Youtube_Download()
                    </font>{" "}
                    method is a private method in order to prevent accidental
                    overriding at the runtime of the application. The youtube
                    operations are performed with the help of the{" "}
                    <font className="bold_project_article_section_style">
                      'pytube'
                    </font>{" "}module.
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
