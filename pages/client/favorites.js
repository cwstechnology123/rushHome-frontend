import useSWR from "swr";
import List from "../../components/property/List";
import Grid from "../../components/skeletonLoader/Grid";
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from 'react'
import { handleSuccess, handleError } from "../../utils/notify";
import { Confirm } from 'notiflix/build/notiflix-confirm-aio'

export default function Favorites() {
    const [isLoading, setIsLoading] = useState(false);
    const [propertyList, setPropertyList] = useState([]);
    const [Inputs, setInputs] = useState({
        mlsStatus : 'all',
        column : 'onMarketDate',
        dir : 'DESC',
    });
    const { data: session, loading } = useSession()
    const userId = session && session.user?.userId
    const accessToken = session && session.user?.accessToken;
    // console.log(session,userId)
    
//fa-sort-amount-desc, fa fa-sort-amount-asc
    useEffect( () => {
        if(session && !loading && userId != undefined){
            getFavProperties(Inputs, userId);
        }
    }, [Inputs, session, loading]);

    async function getFavProperties(Inputs, userId) {
        setIsLoading(true)
        try{
            const payload = {url : `${apiBaseUrl}/properties/favorites`, method : 'POST', data : {userId: userId, mlsStatus: Inputs.mlsStatus, column: Inputs.column, dir: Inputs.dir}}
            const res = await fetchApi(payload)
            setIsLoading(false)
            if (res && res.type == 'error') handleError(res.message)
            if (res && res.type == 'success') {
                setPropertyList(res.data)
            }
        } catch (error) {
            setIsLoading(false)
            console.log(error)
            return false;
        };
    }

    const onChangeHandler = (key, event) => {
        console.log(key,event)
        const value = event.target.value;
        if(value){
            setInputs({...Inputs, [key]: value})
        }
    }

    const sortHandler = (key, value) => {
        const sortBy = value == 'DESC' ? 'ASC' : 'DESC';
        // console.log(key,sortBy)
        if(value){
            setInputs({...Inputs, [key]: sortBy})
        }
    }

    const removeAllHandler = () => {
        Confirm.show(
            'Confirm',
            'Are you sure want to remove all?',
            'Yes',
            'No',
            function okCb() {
                setIsLoading(true)
                removeAllFav()
            },
            function cancelCb() {
                console.log('cancelCb')
            },
            {
            width: '320px',
            borderRadius: '8px',
            // etc...
            },
        );
    }

    async function removeAllFav() {
        try {
            const payload = {url : `${apiBaseUrl}/properties/fav-remove-all`, accessToken: accessToken, method : 'POST', data : {userId: userId}}
            const res = await fetchApi(payload)
            setIsLoading(false)
            if (res && res.type == 'error') handleError(res.message)
            if (res && res.type == 'success') {
                handleSuccess("Removed All Successfully!")
                setPropertyList([])
            } 
        } catch (e) {
            setIsLoading(false)
            console.log(e) 
        }
    }

  return (
    <>
    {(propertyList && propertyList.properties && propertyList.properties.length)?
        <section className="client_favorites">
            <div className="container">
            <div className="client_favbox">
                <div className="left_client">
                <select className="form-select" id="inlineFormSelectPref" 
                onChange={(event)=>onChangeHandler('mlsStatus', event)}>
                    <option value={'all'}>Showing all</option>
                    <option value={'ACTIVE'}>Active</option>
                    <option value={'COMING SOON'}>Coming Soon</option>
                    <option value={'PENDING'}>Pending</option>
                </select>
                </div>
                <div className="right_client">
                <select className="form-select" id="column" 
                onChange={(event)=>onChangeHandler('column', event)}>
                    <option value={'onMarketDate'}>By Date Added</option>
                    <option value={'bedroomsTotal'}>By Bed</option>
                    <option value={'bathroomsTotalInteger'}>By Bath</option>
                    <option value={'listPrice'}>By Price</option>
                </select>
                <span><i className={(Inputs.dir==='DESC')? 'fa-sort-amount-desc' : 'fa-sort-amount-asc'} aria-hidden="true" 
                onClick={()=>sortHandler('dir', Inputs.dir)}/></span>
                {/* <span><i className="fa fa-bars" aria-hidden="true" /></span>
                <span><i className="fa fa-bars" aria-hidden="true" /></span> */}
                <button type="button" className="btn style3 removeall" 
                onClick={removeAllHandler}><i className="fa fa-trash" aria-hidden="true" /> Remove all</button>
                </div>
            </div>
            </div>
        </section>
    : <></>
    }
        <section className="list_clientbox">
            <div className="container">
            <div className="row justify-content-center">
                {(isLoading) ?<Grid item={3} /> : (propertyList && propertyList.properties && propertyList.properties.length) ?
                    <>
                    <List properties={propertyList.properties? propertyList.properties : null} stateCode={''} />
                    </>
                    :
                    <>
                    <div className="col-md-12 text-center">
                        No Records...
                    </div>
                    </>
                }
            </div>
            </div>
        </section>
    </>
  )
}