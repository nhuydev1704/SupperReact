import { useRouter } from 'next/router';
import React from 'react';

const HomePage = () => {
    const router = useRouter();
    console.log('🚀 ~ file: index.js ~ line 6 ~ HomePage ~ router', router);

    React.useEffect(() => {
        if (router.asPath === '/') {
            router.push('/main/dashboard/crypto');
        }
    }, [router]);

    return <></>;
};

export default HomePage;
