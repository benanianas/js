export default function SideBar({setTab}){

    return <div className="sidebar">
    <h2>Project Name</h2>
    <nav>
        <button onClick={() => setTab(1)}>Flutter (Tags)</button>
        <button onClick={() => setTab(2)}>Performance</button>
        <button onClick={() => setTab(3)}>Security</button>
        <button onClick={() => setTab(4)}>Missing Documentation</button>
        <button onClick={() => setTab(5)}>Incomprehensible Errors</button>
    </nav>
    </div>
}