import React, { useState, useEffect} from 'react';


function Read () {
    const [packageId, setPackageId] = useState([]); 

    const getPackage = async () => {

        const packageResponse  = await fetch(`http://localhost:3000/users/${packageId}`, {
            method: "GET", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(packageId),
        });
      const packageData = await packageResponse.json();
      console.log(packageData);
         setPackageId(packageResponse);
    }

    useEffect(() => {
        getPackage();
    }, [packageId])

    if (!packageId) return null;



  return (
    <div>
        <ul>
        {
            // packageData.map((data)=> {
            //     return (
            //         <>
            //              <li>{data.packageId}</li>
            //              <li>{data.packageName}</li>
            //         </>
            //     )
            // })
        }
        </ul>
    </div>
  )
}

export default Read