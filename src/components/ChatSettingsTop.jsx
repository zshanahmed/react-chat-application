const ChatSettingsTop = (props) => {

    const logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    }
    
    const {chats} = props;
    console.log(chats);
    if (!chats) return <div/>
    return (
        <div align="center">
            <div className="settings-title">
                <h3 align="center" >{chats?.title}</h3>
                <span>You are logged in as {localStorage.getItem('username')}</span>
            </div>
            <button type="button" onClick={logout} className="logout-button">
                <h4>Logout</h4>
            </button>
        </div>
    )

}

export default ChatSettingsTop;