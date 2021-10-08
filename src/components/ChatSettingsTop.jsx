const ChatSettingsTop = (props) => {

    const logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    }
    
    const {creds, chats} = props;
    return (
        <div align="center">
            <div className="settings-title">
                <h4 align="center" >{chats?.title}</h4>
            </div>
            <button type="button" onClick={logout} className="logout-button">
                <h4>Logout</h4>
            </button>
        </div>
    )

}

export default ChatSettingsTop;