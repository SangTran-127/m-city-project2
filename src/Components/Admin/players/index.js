import React, {useEffect, useState} from 'react'
import AdminLayout from '../../../Hoc/AdminLayout'
import { playersCollection } from '../../../firebase'
import { Button } from '@material-ui/core';
function AdminPlayers() {
    const [lastVisible, setLastVisible] = useState(null)
    const [loading, setLoading] = useState(false)
    const [players, setPlayers] = useState(null)

    useEffect(()=>{
        if(!players) { // neu ko co player thi setLoading = true
            setLoading(true)
            playersCollection.limit(2).get()
            .then(snapshot => {
                const lastVisible = snapshot.docs[snapshot.docs.length - 1] // lay element cuoi cung
                const players = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setLastVisible(lastVisible)
                setPlayers(players) 
            }).catch(error => console.log(error))
            .finally(() => {
                //no se chay mac ke try va catch, try catch chay xng r no se chay
                setLoading(false)
            })
        }
    }, [players])

    console.log(lastVisible);
    console.log(players);
    const loadMorePlayers = () => {
        if (lastVisible) {
            setLoading(true)
            playersCollection
            .startAfter(lastVisible)
            .limit(2)
            .get()
            .then(snapshot => {
                const lastVisible = snapshot.docs[snapshot.docs.length - 1]
                const newPlayers = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setLoading(lastVisible)
                setPlayers([...players, ...newPlayers])
            })
        } else {
            console.log('nothing to load!!');
        }
    }
    return (
        <AdminLayout title="The players">
            <Button 
                onClick={() => loadMorePlayers()}
            >
                load more
            </Button>
        </AdminLayout>
    )
}

export default AdminPlayers
