function ConditionalRendering () {
    const data = [
        {
            id: 1,
            title: "Website Redesign",
            client: "ABC Corp",
            members: ["Alice", "Bob"]
        },
        {
            id: 2,
            title: "Mobile App Development",
            client: "XYZ Ltd",
            members: ["Charlie", "Dave", "Bob"]
        },
        {
            id: 3,
            title: "API Integration",
            client: "Tech Group",
            members: ["Eve", "Frank", "Dave"]
        },
        {
            id: 4,
            title: "Cloud Migration",
            client: "DataSolutions",
            members: ["Grace"]
        },
        {
            id: 5,
            title: "Security Audit",
            client: "SafeGuard Inc.",
            members: ["Isabel", "Jack"]
        }
    ];
    const number = 13
    const user = {
        name: 'Adam',
        isOnline: false
    }
    return (
        <div>
            {
           user.isOnline === true ? <h2>{user.name}-is online</h2> : <h2>{user.name}-is Offline</h2>
            }

            {
                number % 2 ===0 ? (
                    <div>
                        <h2>the number is a even number</h2>
                    </div>
                ) : (
                    <div>
                        <h2>the number is odd number</h2>
                    </div>
                )
            }           
            {
                data.length === 0 ? (
                    <div>
                        <h2>NO Projects Found</h2>
                        <p>Add your project</p>
                    </div>
                ) : (
                    <div>
                        <h2>Total Projects - {data.length}</h2>
                        <ul>
                            {data.map(ele => {
                                return <li key = {ele.id}>{ele.title}</li>
                            })}
                        </ul>
                    </div>
                )
                    
            }
        </div>
    )

}
export default ConditionalRendering