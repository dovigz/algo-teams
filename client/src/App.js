import "./App.css";
import NavBar from "./components/NavBar";
import ToastNotification from "./components/ToastNotification";
import Routes from "./pages/Routes";
import { useStateContext } from "./context/state";

import customTheme from "./styles/customTheme";
import { useBodyStyles } from "./styles/muiStyles";
import { Paper } from "@material-ui/core/";
import { ThemeProvider } from "@material-ui/core/styles";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp"; // This mode supports both C and C++
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-dart"; // Assuming Ace has added Dart mode by now; this might not be available as of 2021
import "ace-builds/src-noconflict/mode-elixir"; // Assuming Ace has added Elixir mode by now; this might not be available as of 2021
import "ace-builds/src-noconflict/mode-erlang"; // Assuming Ace has added Erlang mode by now; this might not be available as of 2021
import "ace-builds/src-noconflict/mode-golang"; // The actual mode might be named 'go', so consider checking
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-kotlin"; // Assuming Ace has added Kotlin mode by now; this might not be available as of 2021
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-python"; // This mode should support both Python 2 and 3
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-scala";
import "ace-builds/src-noconflict/mode-swift"; // Assuming Ace has added Swift mode by now; this might not be available as of 2021
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/theme-clouds";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/theme-dawn";
import "ace-builds/src-noconflict/theme-dreamweaver";
import "ace-builds/src-noconflict/theme-eclipse";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-iplastic";
import "ace-builds/src-noconflict/theme-katzenmilch";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-clouds_midnight";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-gob";
import "ace-builds/src-noconflict/theme-gruvbox";
import "ace-builds/src-noconflict/theme-idle_fingers";
import "ace-builds/src-noconflict/theme-kr_theme";
import "ace-builds/src-noconflict/theme-merbivore";
import "ace-builds/src-noconflict/theme-merbivore_soft";
import "ace-builds/src-noconflict/theme-mono_industrial";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-pastel_on_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-vibrant_ink";

import "react-quill/dist/quill.snow.css";

const App = () => {
  const { darkMode } = useStateContext();
  const classes = useBodyStyles();
  // window.addEventListener(
  //   "message",
  //   (event) => {
  //     console.log("incoming msg", event);
  //   },
  //   false
  // );

  return (
    <ThemeProvider theme={customTheme(darkMode)}>
      <Paper className={classes.root} elevation={0}>
        <ToastNotification />
        <NavBar />
        <Routes />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
