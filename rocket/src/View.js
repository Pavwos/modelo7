const View = {
    render(){
        return `
    <p>Next post in</p>
    <span>04:20</span>
        `;
    }
}

document.body.innerHTML = View.render()

export default View;