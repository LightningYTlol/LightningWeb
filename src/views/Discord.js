function Discord () {
    return(
        <div className="Discord">
            <button id="myButton">Invite Link</button>

            <script type="text/javascript">
                document.getElementById("myButton").onclick = function () {
                    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1004287257412370482&permissions=8&scope=bot%20applications.commands"
                    };
            </script>
        </div>
    )

    
}
export default Discord;