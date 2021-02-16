import React from 'react';
import Popup from '../components/popup'
import { Link } from 'react-router-dom';
import Back from "../components/back";

export default () => {
    return (
        <div className="col-sm-10">
            <div className="[ popupwrapper ]">
                <Popup header='EXPLORE!' />
                <div className="[ popupwrapper_content ]">
                    <h1>What would you like to do?</h1>
                    <ul>
                        <li>
                        <Link to="/galleryoverview" class="[ popupwrapper_content_link ]"><img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDY0IDY0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zNy4zNzkgMTIuNTUyYy0uNzk5LS43NjEtMi4wNjYtLjczMS0yLjgyNy4wNjktLjc2Mi44LS43MyAyLjA2Ni4wNjkgMi44MjhsMTUuMzQyIDE0LjU1MWgtMzkuOTYzYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgzOS44OTlsLTE1LjI3OCAxNC41NTJjLS44Ljc2Mi0uODMxIDIuMDI4LS4wNjkgMi44MjguMzkzLjQxMi45Mi42MiAxLjQ0OC42Mi40OTYgMCAuOTkyLS4xODMgMS4zNzktLjU1MmwxNy40NDktMTYuNjJjLjc1Ni0uNzU1IDEuMTcyLTEuNzU5IDEuMTcyLTIuODI4cy0uNDE2LTIuMDczLTEuMjA3LTIuODYyeiIvPjwvc3ZnPg==" />My work</Link>
                        </li>
                        <li>
                        <Link to="/Bio" class="[ popupwrapper_content_link ]"><img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDY0IDY0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zNy4zNzkgMTIuNTUyYy0uNzk5LS43NjEtMi4wNjYtLjczMS0yLjgyNy4wNjktLjc2Mi44LS43MyAyLjA2Ni4wNjkgMi44MjhsMTUuMzQyIDE0LjU1MWgtMzkuOTYzYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgzOS44OTlsLTE1LjI3OCAxNC41NTJjLS44Ljc2Mi0uODMxIDIuMDI4LS4wNjkgMi44MjguMzkzLjQxMi45Mi42MiAxLjQ0OC42Mi40OTYgMCAuOTkyLS4xODMgMS4zNzktLjU1MmwxNy40NDktMTYuNjJjLjc1Ni0uNzU1IDEuMTcyLTEuNzU5IDEuMTcyLTIuODI4cy0uNDE2LTIuMDczLTEuMjA3LTIuODYyeiIvPjwvc3ZnPg==" />Biography and CV</Link>
                        </li>
                        <li>
                        <Link to="/Contact" class="[ popupwrapper_content_link ]"><img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDY0IDY0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zNy4zNzkgMTIuNTUyYy0uNzk5LS43NjEtMi4wNjYtLjczMS0yLjgyNy4wNjktLjc2Mi44LS43MyAyLjA2Ni4wNjkgMi44MjhsMTUuMzQyIDE0LjU1MWgtMzkuOTYzYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgzOS44OTlsLTE1LjI3OCAxNC41NTJjLS44Ljc2Mi0uODMxIDIuMDI4LS4wNjkgMi44MjguMzkzLjQxMi45Mi42MiAxLjQ0OC42Mi40OTYgMCAuOTkyLS4xODMgMS4zNzktLjU1MmwxNy40NDktMTYuNjJjLjc1Ni0uNzU1IDEuMTcyLTEuNzU5IDEuMTcyLTIuODI4cy0uNDE2LTIuMDczLTEuMjA3LTIuODYyeiIvPjwvc3ZnPg==" />Contact me</Link>
                        </li>
                        <li>
                        <Link to="/Backgrounds" class="[ popupwrapper_content_link ]"><img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDY0IDY0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zNy4zNzkgMTIuNTUyYy0uNzk5LS43NjEtMi4wNjYtLjczMS0yLjgyNy4wNjktLjc2Mi44LS43MyAyLjA2Ni4wNjkgMi44MjhsMTUuMzQyIDE0LjU1MWgtMzkuOTYzYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgzOS44OTlsLTE1LjI3OCAxNC41NTJjLS44Ljc2Mi0uODMxIDIuMDI4LS4wNjkgMi44MjguMzkzLjQxMi45Mi42MiAxLjQ0OC42Mi40OTYgMCAuOTkyLS4xODMgMS4zNzktLjU1MmwxNy40NDktMTYuNjJjLjc1Ni0uNzU1IDEuMTcyLTEuNzU5IDEuMTcyLTIuODI4cy0uNDE2LTIuMDczLTEuMjA3LTIuODYyeiIvPjwvc3ZnPg==" />Change background</Link>
                        </li>
                    </ul>  
                </div>
                <div className="[ popupwrapper_buttons ]">
                    <Back />
                </div>
            </div>
        </div>
    );
}