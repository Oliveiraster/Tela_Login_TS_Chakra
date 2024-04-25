import { Button, Center, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { CardInfo } from '../../components/CardInfo';
import { api } from '../../service/api';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../components/AppContext';

interface UserData {
  id: string;
  email: string;
  password: string;
  name: string;
  balance: number;
}

export const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>();
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AppContext);

  !isLoggedIn && navigate('/');

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };
    getData();
  }, []);

  const actualData = new Date();

  if (userData && id !== userData.id) {
    navigate('/');
  }
  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {userData === null || userData === undefined ? (
          <Center>
            <Spinner size="xl" color="white" />
          </Center>
        ) : (
          <CardInfo
            mainContent={`Bem vindo(a) ${userData?.name}`}
            content={`
          ${actualData.getDate()}/${actualData.getMonth() + 1}/${actualData.getFullYear()} 
          ${actualData.getHours()}:${actualData.getMinutes()}
          `}
          />
        )}
        <CardInfo mainContent="Saldo" content={`R$: ${userData?.balance}`} />
        <Button colorScheme='teal' size='lg' onClick={() => {
                                    navigate('/conta/1/infoconta')
                                }}>
                                    Informação da Conta
                                </Button>
      </SimpleGrid>
    </Center>
  );
};
