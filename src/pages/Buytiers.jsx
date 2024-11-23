import Buytiers from '../components/Buytiers';
import { useParams } from 'react-router-dom';
import useGet from '../hooks/useGet';
import LoadingComponent from '@/components/utility/LoadingComponent';
import NothingToDisplay from '@/components/utility/NothingToDisplay';


const Selecttiers = () => {

  const novelId = useParams().novelId;
  
  const { 
    isLoading,
    data,
    isError,
    error,
    isFetching,
    refetch
  } = useGet({ url: `/api/subscription/get-tiers/${novelId}`, queryKey: `tiers_${novelId}` });

  return (

    <div>

      {isLoading && <LoadingComponent />}

      {isError && <div className="text-black text-center">{error.message || "An error occurred"}</div>}

      {!isLoading && !isError ? (
        <Buytiers data={data} />
      ) : (
          !isLoading && !isError && <NothingToDisplay />
      )}
    
    </div>

  );
};

export default Selecttiers;
