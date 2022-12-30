import useSWR from "swr";
import List from "../../components/property/List";
import Grid from "../../components/skeletonLoader/Grid";
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";
import { useSession } from "next-auth/react";

export default function Favorites() {

    const { data: session } = useSession()
    const userId = session && session.user?.userId
    console.log('userId', userId)
    const fetcher = async (payload) => await fetchApi(payload).then(res => res.data);
    const { data, error, isLoading, isValidating } = useSWR({url : `${apiBaseUrl}/properties/favorites`, method : 'POST', data: {
        userId: userId
    }}, fetcher);

  return (
    <>
        <section className="client_favorites">
            <div className="container">
            <div className="client_favbox">
                <div className="left_client">
                <select className="form-select" id="inlineFormSelectPref">
                    <option selected>Showing all</option>
                    <option value={'ACTIVE'}>Active</option>
                    <option value={'COMING SOON'}>Coming Soon</option>
                    <option value={'PENDING'}>Pending</option>
                </select>
                </div>
                <div className="right_client">
                <select className="form-select" id="column">
                    <option selected value={'onMarketDate'}>By date added</option>
                    <option value={'bedroomsTotal'}>Bed</option>
                    <option value={'bathroomsTotalInteger'}>Bath</option>
                    <option value={'listPrice'}>Price</option>
                </select>
                <span><i className="fa fa-bars" aria-hidden="true" /></span>
                <span><i className="fa fa-bars" aria-hidden="true" /></span>
                <span><i className="fa fa-bars" aria-hidden="true" /></span>
                <button type="submit" className="btn style3 removeall"><i className="fa fa-trash" aria-hidden="true" /> Remove all</button>
                </div>
            </div>
            </div>
        </section>
        <section className="list_clientbox">
            <div className="container">
            <div className="row justify-content-center">
                {(isLoading) ?<Grid item={3} /> : (data) ?
                    <>
                    <List properties={data.properties? data.properties : null} stateCode={''} />
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