import './Navbar.css'


const Navbar = (props:any) => {


    // return <div className="mode">
        return <div className={props.isDark ? 'navDark' : 'mode'}>
        <span className="textleft">Where in the world?</span>
        <span className="textright" onClick={props.changeMode}>Dark mode</span>
        {/*<span className="textright" onClick={props.handlDarkThemeClick}>Dark mode</span>*/}
    </div>
}

export default Navbar;