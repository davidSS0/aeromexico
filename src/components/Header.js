import React from 'react';
import { crearNuevoRegistroAction, modalAcciones, obtenerRegistros } from '../redux/actions/registrosAction';
import { useDispatch, useSelector } from 'react-redux';

const Header = ({ titulo }) => {
    const dispatch=useDispatch();
    const descargaRegistro = (data) => dispatch(obtenerRegistros(data));
    const filtro = useSelector(state => state.registros.filtroActivo);
    return (
        <nav className="center">
                <svg width="194" height="66" viewBox="0 0 194 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96.45 0.888885C97.05 5.67333 97.695 10.4511 98.3083 15.2333C98.7361 18.3756 99.1605 21.5222 99.4083 24.6833C98.3805 24.1422 97.415 23.4094 96.2583 23.1694C96.2472 23.715 96.3533 24.2522 96.4389 24.7889C97.1944 29.25 97.91 33.7211 98.4389 38.2167C98.5089 38.8522 98.6211 39.4856 98.6333 40.1278C98.5089 40.0811 98.3755 40.05 98.2889 39.9444C97.6378 39.2744 97.01 38.5822 96.3555 37.9167C97.6189 45.7467 98.9767 53.5656 100.217 61.4C100.428 62.6467 100.578 63.8044 100.833 64.9944C101.052 64.2344 101.071 63.4344 101.194 62.6556C101.642 57.8511 101.906 53.0306 102.272 48.2194C102.682 49.075 103.134 49.9083 103.567 50.7528C103.847 51.2617 104.072 51.8017 104.406 52.2806C104.504 52.2983 104.604 52.3161 104.706 52.3361C104.713 50.1872 104.734 48.0394 104.733 45.8917C104.784 44.6672 104.688 43.4406 104.8 42.2194C104.804 39.8439 104.807 37.47 104.839 35.0944C105.638 36.6933 106.421 38.2978 107.225 39.8944C107.347 39.7322 107.581 39.5956 107.531 39.3611C107.282 35.2767 106.985 31.1933 106.792 27.1056C106.701 26.2844 106.719 25.455 106.692 24.6306C106.883 24.7006 106.975 24.89 107.081 25.05C108.071 26.6522 109.068 28.25 110.033 29.8667C110.171 30.0767 110.463 30.0156 110.678 30.0167C111.787 29.9111 112.865 29.5961 113.914 29.2306C115.484 28.6617 117.044 27.9156 118.206 26.6833C119.034 26.8444 119.848 27.1244 120.622 27.4667C120.64 30.1978 120.592 32.93 120.608 35.6611C120.672 37.1967 120.485 38.7711 120.925 40.2667C121.262 41.3378 122.146 42.095 122.944 42.8306C124.368 44.0772 125.86 45.2422 127.353 46.4056C127.999 46.9289 128.887 46.8472 129.664 46.8028C130.594 46.7328 131.418 46.2689 132.253 45.8944C133.038 45.5322 133.81 45.1367 134.567 44.7167C135.572 44.1611 136.433 43.3411 137.022 42.3556C137.396 41.7511 137.484 41.0328 137.603 40.3472C137.825 38.8739 137.927 37.3844 137.917 35.8944C137.969 33.2056 137.506 30.5439 137.25 27.875L137.197 27.7917C137.179 27.265 137.081 26.7461 137.011 26.225C136.906 25.5272 136.831 24.8094 136.528 24.1639C136.252 23.5483 135.818 23.0161 135.328 22.5583C134.024 21.3539 132.604 20.2561 131.025 19.4361C130.357 19.0539 129.584 19.3906 128.933 19.6361C126.66 20.5994 124.559 21.92 122.486 23.25C121.998 23.5433 121.588 23.9972 121.447 24.5583C121.327 25.0317 121.085 25.4594 120.803 25.8528C120.037 25.7761 119.344 25.4178 118.611 25.2111C118.896 21.4689 119.288 17.7361 119.556 13.9917C119.594 13.2806 119.774 12.5211 119.464 11.8444C119.134 11.0533 118.551 10.4117 118.033 9.74166C116.117 7.38944 114.212 5.02666 112.225 2.73333C111.802 2.67111 111.386 2.77555 110.994 2.92777C109.706 3.39444 108.423 3.88722 107.122 4.31944C106.939 4.38277 106.744 4.40389 106.556 4.43055C106.363 3.30944 106.624 2.18 106.644 1.05555C104.801 1.03333 102.953 1.14055 101.108 1.04166C99.8038 0.960552 98.4972 0.942219 97.1917 0.888885H96.45ZM110.439 5.69444C110.612 5.69007 110.782 5.74639 110.933 5.83889C111.039 6.02778 111.077 6.24111 111.097 6.45555C111.679 9.60555 111.861 12.8067 112.039 16C112.091 16.7344 112.026 17.4806 112.128 18.2083C112.163 19.7394 112.177 21.27 112.156 22.8C111.81 22.8622 111.46 22.8244 111.117 22.7778C110.112 22.6778 109.105 22.83 108.119 23.0056C107.613 23.0622 107.112 23.1594 106.606 23.2083C106.487 18.8417 106.554 14.4722 106.508 10.1056C106.511 9.10778 106.504 8.11166 106.511 7.11389C106.509 6.86389 106.589 6.52944 106.883 6.48611C107.99 6.15166 109.139 5.98277 110.264 5.71944C110.322 5.70361 110.381 5.6959 110.439 5.69444H110.439ZM130.517 21.3222C130.664 21.85 130.53 22.4011 130.361 22.9056C129.99 23.7178 129.33 24.3511 128.617 24.8667C127.98 25.3567 127.118 25.4178 126.525 25.9778C126.444 25.85 126.409 25.7128 126.417 25.5639C126.419 25.0761 126.382 24.5811 126.511 24.1056C127.791 23.1022 129.168 22.2289 130.517 21.3222ZM107.989 24.4778C108.359 24.4956 108.738 24.4733 109.1 24.5722C110.091 24.6522 111.073 24.83 112.036 25.0778L112.133 25.3194C112.138 25.4117 112.144 25.5039 112.153 25.5972C111.783 26.1972 111.334 26.7411 110.894 27.2889C110.474 27.4422 110.259 27.0044 110.003 26.7722C109.317 26.02 108.636 25.2622 107.989 24.4778ZM130.919 26.4611C131.226 28.7456 131.532 31.0317 131.708 33.3306C131.775 34.145 131.713 34.9656 131.806 35.7778C131.857 36.4478 131.736 37.1133 131.756 37.7833C131.742 39.0844 131.618 40.3811 131.464 41.6722C131.356 42.3444 131.296 43.04 131.022 43.6722C130.396 44.0322 129.772 44.405 129.089 44.6472C128.921 44.7228 128.736 44.7311 128.558 44.7167C128.079 44.2244 127.534 43.765 127.197 43.1583C126.973 40.7017 126.766 38.2356 126.681 35.7667C126.578 34.9978 126.619 34.2178 126.589 33.4444C126.454 31.5044 126.508 29.5556 126.492 27.6111C126.777 27.4833 127.063 27.355 127.358 27.2472C127.893 26.9961 128.45 26.7978 128.978 26.5278C129.622 26.47 130.272 26.4689 130.919 26.4611Z" fill="white" />
                    <path d="M71.1744 6.53446C71.4533 6.46224 71.82 6.54224 71.9467 6.82779C72.0522 8.28335 72.0089 9.75335 72.1211 11.2078C72.1367 11.2833 72.1689 11.4356 72.1844 11.5122C72.31 11.5 72.4456 11.5011 72.55 11.4145C73.3 10.9 74.0356 10.3645 74.8011 9.87335C75.1656 9.65112 75.5322 9.41001 75.9489 9.29779C76.3378 9.24112 76.6244 9.57335 76.82 9.86446C77.3867 10.7045 77.8167 11.6278 78.2489 12.5433C78.7356 13.6711 79.3067 14.7811 79.5822 15.9856C79.7244 16.4511 79.2456 16.7189 78.9389 16.9533C77.3967 18.0333 75.8078 19.0511 74.1633 19.9711C73.7844 20.2122 73.5956 19.6256 73.3378 19.4433C73.6567 19.0622 73.9911 18.6922 74.3344 18.3311C74.47 18.2089 74.3822 18.0122 74.3533 17.8611C73.95 16.5811 73.6078 15.2822 73.2 14.0045C73.1889 13.9367 73.1667 13.8022 73.1556 13.7345C72.7967 13.6433 72.4267 13.7011 72.1 13.8678C72.07 13.9245 72.01 14.0378 71.98 14.0945C71.9033 16.1356 71.9889 18.1778 71.9744 20.22C71.9656 22.74 71.9889 25.26 71.9856 27.78C72.0711 28.48 72.0211 29.1856 72.0333 29.8889C72.0422 31.7111 72.0544 33.5333 72.0811 35.3556C72.4022 36.1578 73.1844 36.6222 73.68 37.2856C73.2256 37.3089 72.7744 37.2611 72.3278 37.1922C71.6633 37.1811 70.9922 37.1311 70.3344 37.1256C69.2656 37.0233 68.1822 37.0956 67.1222 37.2389C66.6444 37.2989 66.1556 37.2478 65.6833 37.3489C65.0656 37.35 64.4078 37.4667 63.8278 37.1967C63.5255 37.0589 63.2211 36.9222 62.9089 36.8078C62.9244 36.7711 62.9544 36.6989 62.97 36.6622C63.5289 36.3378 64.0133 35.9022 64.4789 35.4589C64.8889 35.0433 65.3078 34.5811 65.4222 33.9889C65.7644 32.35 65.8044 30.6711 65.9111 29.0067C65.9255 24.1511 65.9911 19.2967 66.0478 14.4433C66.0322 14.26 66.0878 14.0545 65.9933 13.8878C66.1511 13.4745 66.0267 12.9911 66.0656 12.55C65.7889 12.6311 65.5144 12.7167 65.2422 12.8078C65.1167 12.8122 64.9911 12.8167 64.8678 12.8211C64.81 12.7267 64.7478 12.6333 64.6922 12.54C64.88 12.2956 65.13 12.1145 65.3589 11.9111C67 10.2967 68.6367 8.67668 70.2711 7.05557C70.5033 6.78224 70.8311 6.61779 71.1744 6.53446Z" fill="white" />
                    <path d="M22.3878 7.6211C23.3333 7.70998 24.2756 7.88665 25.2311 7.86776C26.7867 7.94665 28.3489 7.95998 29.9033 7.83998C31.1444 7.79221 32.3789 7.57665 33.6211 7.60776C33.5622 8.00554 33.1722 8.19221 32.9867 8.51776C32.4411 9.43554 32.0022 10.4278 31.76 11.4689C31.6578 12.2333 31.6144 13.0055 31.6122 13.7766C31.5711 17.8822 31.5978 21.9889 31.65 26.0944C31.6067 26.2855 31.8133 26.3622 31.9633 26.2911C34.3311 25.7011 36.7822 25.5189 39.2167 25.5911C40.0922 25.6289 41.0033 25.5567 41.8467 25.8289C41.83 25.9244 41.8144 26.02 41.7989 26.1155C41.5344 26.2122 41.2589 26.3022 41.0456 26.4933C40.3778 27.0455 39.7689 27.6655 39.1411 28.2622C38.9833 28.4344 38.7222 28.6055 38.8022 28.8778C39.0444 30.2344 39.1022 31.6178 39.3678 32.97C39.8856 34.8555 40.4967 36.7155 40.9778 38.6133C41.1789 38.6133 41.3656 38.54 41.5022 38.3889C41.7956 38.0878 42.1478 37.8522 42.4589 37.5711C42.5744 36.3478 42.6178 35.1155 42.6489 33.8866C42.7322 33.0389 42.7022 32.1878 42.7289 31.3378C42.7611 26.8722 42.6744 22.3955 42.1356 17.9578C41.8878 18.0167 41.6367 18.0722 41.4078 18.1855C40.2356 18.7155 39.0889 19.3055 37.9978 19.9866C37.7033 20.1589 37.4278 20.4 37.32 20.7344C37.0722 21.5078 37.1422 22.3355 37.1844 23.1344C37.0056 23.1911 36.8278 23.2489 36.65 23.3067C35.7178 21.8055 34.7511 20.3089 34.0911 18.6622C33.9022 18.0978 33.6078 17.5244 33.72 16.9122C34.1744 16.6955 34.5444 16.3478 34.9589 16.0689C36.6156 14.8967 38.3622 13.8289 40.2422 13.0544C40.4978 12.9678 40.8567 12.7889 41.0678 13.0511C42.8089 14.7955 44.4944 16.5955 46.1633 18.4089C47.0622 19.4133 48.0467 20.46 48.3167 21.83C48.5722 23.43 48.61 25.0522 48.6167 26.6689C48.6022 28.5189 48.6633 30.3722 48.53 32.2189C48.52 33.6389 48.4789 35.0578 48.4778 36.4778C49.1156 36.7678 49.8544 36.7944 50.5267 36.6166C50.4978 36.8211 50.34 36.9611 50.1978 37.0944C49.2678 37.9422 48.3244 38.7767 47.3733 39.6C46.7244 40.1444 46.4011 40.9711 45.7556 41.5189C45.0667 42.1255 44.0333 42.1778 43.1922 41.9078C42.3311 41.4611 42.3333 40.3811 42.2633 39.5422C41.14 40.35 40.0389 41.19 38.9411 42.0322C38.4233 42.4322 37.7378 42.2055 37.1611 42.0944C36.74 41.9778 36.2011 41.8122 36.0856 41.33C35.5978 39.8544 35.1189 38.3755 34.6289 36.9011C34.0989 35.2433 33.4767 33.6078 33.12 31.9C32.9678 31.3522 33.2389 30.8155 33.5111 30.3566C34.2456 29.1733 35.2989 28.2422 36.2978 27.2911C34.7433 27.5878 33.1256 27.8355 31.7378 28.6433C31.7256 32.4655 31.7722 36.2866 31.76 40.1089C31.8344 41.74 31.7567 43.3733 31.8111 45.0044C31.8144 46.9266 31.8256 48.8489 31.8756 50.77C31.99 52.2689 32.2311 53.9011 33.2711 55.0633C33.6456 55.5278 34.2533 55.6833 34.67 56.0944C34.6156 56.2689 34.5422 56.4355 34.4556 56.5966C34.2678 56.5978 34.0811 56.6089 33.8956 56.5844C31.8322 56.25 29.7511 56.0089 27.6622 55.9255C25.6956 55.9111 23.72 55.8367 21.7633 56.0733C21.6656 55.7522 21.34 55.5 21.3633 55.1533C22.4533 54.5433 23.5033 53.6955 23.9322 52.4789C24.4767 50.9355 24.5478 49.2811 24.6822 47.6655C24.8211 44.74 24.8644 41.8089 24.7811 38.8811C24.7067 36.92 24.7233 34.95 24.4767 33C22.4311 34.6011 19.8989 35.4089 17.3956 35.9644C17.4167 40.0344 17.4722 44.1044 17.5 48.1744C17.5411 49.0289 17.46 49.89 17.5611 50.7411C17.81 51.6744 18.7278 52.1533 19.4933 52.6133C19.6689 52.73 19.9522 52.9811 19.7944 53.1944C19.4756 53.2344 19.1822 53.08 18.8789 53.0144C17.9044 52.8044 16.9078 52.74 15.9178 52.6522C12.6244 52.4311 9.32111 52.3755 6.02111 52.3578C5.90333 52.3222 5.57777 52.2089 5.82111 52.1C5.83 52.0044 5.84777 51.8155 5.85666 51.72C7.03333 51.2555 8.21666 50.58 8.87 49.4544C9.26889 48.7822 9.27889 47.9822 9.34666 47.2278C9.43889 45.7455 9.41222 44.2589 9.47 42.7744C9.47222 40.72 9.42777 38.6655 9.39777 36.6111C7.83666 35.8878 6.27333 35.1655 4.75111 34.3622C3.69 33.8389 2.93777 32.8766 2.29333 31.9144C1.75222 31.0644 1.26777 30.1733 0.888885 29.2378V29.01C2.58666 28.24 4.45666 27.9733 6.28777 27.7222C6.28889 27.9033 6.34111 28.1422 6.14777 28.2466C5.00666 28.93 3.80111 29.5066 2.68889 30.2411C3.06222 30.6778 3.52777 31.0178 3.99333 31.3478C5.28 32.2389 6.67333 32.9644 8.08222 33.6411C8.46666 33.8133 8.84555 34.0466 9.28 34.0511C9.34889 33.3322 9.30444 32.6078 9.31222 31.8866C9.26222 30.4089 9.30111 28.9266 9.19 27.4511C9.15333 26.3378 9.19111 25.2211 9.09 24.1122C9 20.4033 8.83444 16.6966 8.69666 12.9911C8.47 11.8289 7.45111 11.0367 6.38 10.6755C6.39889 10.4544 6.53111 10.2322 6.76 10.1822C7.13555 10.1478 7.51444 10.1878 7.89 10.2122C8.40555 10.2878 8.92666 10.24 9.44555 10.2511C10.2211 10.2411 11 10.2867 11.7733 10.2C12.9578 10.1767 14.1433 10.1711 15.3289 10.1422C16.3422 10.0633 17.36 10.0489 18.3767 10.0444C18.3411 10.2633 18.3044 10.4811 18.2689 10.6989C17.6389 11.0211 17.24 11.66 17.0722 12.3311C16.95 13.0278 16.9667 13.7389 16.9578 14.4444C16.9578 16.2966 16.9533 18.1489 17.02 19.9989C17.0589 21.5544 17.0333 23.1133 17.1378 24.6666C17.1578 25.8533 17.1633 27.0411 17.2078 28.2278C17.2978 29.74 17.2989 31.2589 17.4111 32.7722C18.1422 32.6711 18.8 32.3033 19.4522 31.9811C21.2211 31.0055 22.9444 29.9222 24.5122 28.6444C24.5289 22.3489 24.3544 16.0489 23.8556 9.77443C23.8322 9.11776 23.3078 8.64665 22.7544 8.38221C22.4456 8.25776 22.3511 7.92665 22.3878 7.6211Z" fill="white" />
                    <path d="M146.093 7.49222C146.431 7.42777 146.513 7.79222 146.502 8.05111C146.514 9.59111 146.578 11.13 146.596 12.67C146.647 13.5756 146.561 14.4933 146.692 15.39C147.768 15.3778 148.843 15.4267 149.92 15.4222C149.942 15.6178 149.961 15.8144 149.987 16.01C150.079 16.3311 150.028 16.6722 150.124 16.9922C150.161 17.34 150.194 17.69 150.214 18.04C149.18 18.0622 148.146 18.08 147.111 18.0889C146.968 18.0789 146.833 18.12 146.706 18.17C146.511 21.2955 146.671 24.4278 146.607 27.5567C146.551 30.2644 146.422 32.97 146.348 35.6778C146.257 36.0755 146.31 36.4889 146.281 36.8933C146.163 39.9644 145.997 43.0378 145.891 46.11C145.846 46.8922 145.679 47.7944 146.191 48.4667C147.021 49.3067 147.981 50.0144 148.967 50.6622C148.762 50.8933 148.577 51.1544 148.321 51.3289C148.121 51.33 147.95 51.2033 147.774 51.1344C145.744 50.1267 143.693 49.1555 141.737 48.0078C141.239 47.7155 140.751 47.3711 140.437 46.8778C140.128 46.4244 140.04 45.8655 140.036 45.3289C140.073 42.44 140.111 39.5511 140.229 36.6644C140.324 33.8078 140.641 30.9667 140.698 28.1089C140.754 25.15 140.727 22.1767 140.427 19.2344C140.403 18.8044 140.346 18.3789 140.256 17.9589C138.678 17.9655 137.101 17.9367 135.524 17.9367C135.504 17.6589 135.493 17.3811 135.514 17.1033C137.427 16.0378 139.186 14.7056 140.836 13.2689C142.449 11.84 143.909 10.2389 145.191 8.50666C145.466 8.14666 145.729 7.77 146.093 7.49222Z" fill="white" />
                    <path d="M54.7389 9.54334C54.9911 9.40445 55.2311 9.16222 55.54 9.19C55.9933 9.26445 56.4 9.49 56.8278 9.64334C57.0667 10.7344 57.0644 11.8756 57.2378 12.9789C57.2511 13.1078 57.2644 13.2378 57.2778 13.3678C57.3178 13.3978 57.3955 13.4567 57.4355 13.4867C58.0267 13.0111 58.6833 12.6244 59.3222 12.2167C59.9122 11.8478 60.6022 11.5244 61.3156 11.6344C61.7667 11.7433 62.0078 12.1856 62.2244 12.5556C62.7111 13.5411 63.1322 14.5589 63.5356 15.5811C63.9922 16.6911 64.4822 17.8056 64.7033 18.99C64.6767 19.3667 64.4989 19.7156 64.17 19.9144C62.7167 20.8589 61.2278 21.7489 59.7389 22.6356C59.5722 22.7278 59.4111 22.8567 59.2111 22.8411C59.1033 22.6511 58.9667 22.4811 58.8133 22.3289C59.1744 21.9722 59.5078 21.5889 59.8433 21.21C59.8211 21.1944 59.7744 21.1622 59.7522 21.1467C59.6567 20.5733 59.4678 20.0211 59.3178 19.46C58.9767 18.2233 58.6033 16.9956 58.2533 15.7622C58.18 15.42 57.7711 15.0211 57.4444 15.3333C57.3522 15.6922 57.4111 16.0678 57.4133 16.4333C57.4933 18.9589 57.5978 21.4822 57.6489 24.0078C57.7767 24.8822 57.6522 25.7811 57.7944 26.6567C57.8956 28.2956 58.1155 29.9256 58.2089 31.5656C58.4344 33.5633 58.4233 35.5911 58.7411 37.5811C58.9444 38.1356 59.5289 38.4056 60.0189 38.6589C60.0511 38.7122 60.1144 38.82 60.1455 38.8745C60.1267 38.9389 60.0867 39.07 60.0667 39.1345C56.9711 39.21 53.8733 39.1956 50.7755 39.1989C50.4467 39.1989 50.1155 39.2156 49.7889 39.1611C49.96 38.7367 50.2567 38.3589 50.6544 38.1278C51.0555 37.9022 51.46 37.6633 51.78 37.3289C51.8967 37.2133 51.9433 37.0545 51.93 36.8945C51.9322 33.7444 51.9267 30.5956 51.92 27.4467C51.9544 27 51.8411 26.5611 51.86 26.1144C51.8622 23.7411 51.8278 21.3667 51.8067 18.9933C51.6789 17.6078 51.7933 16.2056 51.6055 14.8233C50.4778 14.8222 49.3411 14.7689 48.22 14.9111C48.0222 14.8578 47.7211 14.74 47.7011 14.5067C50.0289 12.8289 52.3522 11.1389 54.7389 9.54334Z" fill="white" />
                    <path d="M155.914 10.5778C156.066 10.2789 156.229 9.95779 156.551 9.8089C156.623 9.8489 156.769 9.9289 156.841 9.9689C156.956 10.9056 156.934 11.85 156.987 12.79C157.07 13.1511 157.024 13.5245 157.05 13.8922C157.124 15.7156 157.239 17.5367 157.306 19.3611C157.832 19.3489 158.362 19.3745 158.889 19.3278C159.26 19.3989 159.63 19.2911 160.003 19.2978C160.586 19.3045 161.169 19.2989 161.751 19.2778C161.716 20.01 161.767 20.7567 161.623 21.4789C160.219 21.5356 158.812 21.6 157.412 21.7245C157.428 23.3756 157.402 25.0267 157.427 26.6767C157.5 26.9245 157.468 27.1845 157.473 27.4389C157.467 30.18 157.518 32.9222 157.527 35.6633C157.633 36.9189 157.573 38.1822 157.616 39.4422C157.654 41.7356 157.718 44.0256 157.758 46.3211C157.836 47.5644 157.793 48.8156 157.927 50.0556C159.107 50.66 160.267 51.3022 161.444 51.91C161.763 52.0356 162.073 52.3733 162.432 52.2678C163.226 51.7289 163.932 51.0711 164.662 50.4522C164.846 50.3378 164.728 50.1189 164.686 49.9611C163.481 49.59 162.227 49.43 161 49.1556C160.574 49.0389 160.004 49.0722 159.776 48.6189C160.571 48.4044 161.406 48.5267 162.219 48.5556C164.106 48.6533 165.992 48.7733 167.878 48.8911C168.077 48.9289 168.389 48.9322 168.398 49.2156C168.442 49.5845 168.082 49.7511 167.863 49.9689C166.989 50.7678 166.211 51.6633 165.384 52.51C164.888 53.0122 164.562 53.6789 163.952 54.0644C163.741 54.2444 163.44 54.2189 163.194 54.1456C161.19 53.5256 159.2 52.8545 157.248 52.0878C155.452 51.37 153.619 50.6489 152.054 49.4889C151.844 49.2911 151.556 49.1 151.54 48.7845C151.368 45.82 151.412 42.8511 151.408 39.8822C151.417 38.7333 151.444 37.5856 151.481 36.4378C151.496 31.4989 151.37 26.5622 151.268 21.6245C150.472 21.6645 149.673 21.6633 148.881 21.5945C148.534 21.5811 148.366 21.1545 148.499 20.87C148.599 20.7 148.732 20.5533 148.871 20.4122C150.421 18.8456 151.876 17.1756 153.121 15.3522C154.19 13.8467 155.087 12.2267 155.914 10.5778Z" fill="white" />
                    <path d="M183.448 14.9933C183.759 14.76 184.092 15.06 184.141 15.3822C184.326 16.3578 184.316 17.3589 184.48 18.3378C185.637 17.6433 186.802 16.9633 187.946 16.2456C188.199 16.0911 188.401 15.83 188.714 15.7922C188.923 15.7533 189.214 15.7644 189.337 15.9733C189.854 16.6967 190.293 17.4744 190.758 18.2333C191.476 19.49 192.21 20.7456 192.738 22.0967C192.924 22.5378 192.954 23.0378 192.866 23.5055C192.53 24.1867 191.861 24.5989 191.316 25.0955C189.75 26.3611 188.163 27.6011 186.569 28.83C186.42 28.6011 186.213 28.4211 186.018 28.2378C186.447 27.5789 186.953 26.9722 187.403 26.3278C187.437 26.1778 187.386 26.0289 187.347 25.8867C186.957 24.6733 186.593 23.4511 186.204 22.2367C186.011 21.6178 185.823 20.9989 185.624 20.3833C185.214 20.6678 184.803 20.9533 184.379 21.2167C184.428 24.5555 184.597 27.8911 184.649 31.2311C184.766 32.3733 184.697 33.5333 184.762 34.6822C184.876 35.67 184.783 36.6767 184.891 37.6667C184.948 40.1944 185.081 42.7189 185.201 45.2433C185.31 46.1167 185.972 46.7855 186.696 47.2178C187.609 47.7644 188.639 48.0878 189.671 48.3255C189.849 48.3733 190.03 48.4044 190.213 48.4555C190.643 48.5122 191.071 48.6011 191.507 48.6444C191.501 48.8889 191.49 49.1333 191.481 49.3778C190.542 49.4311 189.602 49.3667 188.664 49.3822C188.26 49.3567 187.851 49.4022 187.456 49.3211C186.182 49.3244 184.912 49.18 183.676 48.88C182.438 48.6067 181.216 48.2689 180.004 47.8978C178.478 47.4489 176.881 47.1144 175.284 47.3055C175.179 47.06 175.069 46.8155 175 46.5589C176.334 46.4411 177.259 45.3055 177.958 44.2689C178.501 43.1533 178.5 41.8755 178.526 40.6622C178.562 37.1778 178.479 33.6944 178.457 30.21C178.359 29.2955 178.423 28.3633 178.384 27.4422C178.393 25.52 178.252 23.6044 178.286 21.6822C177.733 21.6511 177.184 21.7578 176.633 21.7356C176.622 21.6011 176.613 21.4656 176.607 21.3311C176.847 20.9678 177.052 20.5722 177.386 20.2822C179.429 18.5467 181.417 16.7444 183.448 14.9933Z" fill="white" />
                    <path d="M168.797 17.6917C168.499 17.7001 168.202 17.7354 167.919 17.8111C165.796 19.4678 163.741 21.2178 161.606 22.8556C161.378 23.9211 161.356 25.025 161.211 26.1028C161.199 26.8183 160.921 27.5011 160.928 28.2167C161.053 31.14 161.024 34.0645 161.064 36.9889C161.053 37.7045 160.822 38.3922 160.794 39.1056C161.21 39.5378 161.593 40.0011 162.006 40.4389C163.486 41.9611 164.969 43.5078 166.725 44.7167C166.998 44.9289 167.352 44.9695 167.683 45.0306C168.528 45.1083 169.38 45.2067 170.228 45.0778C170.639 45.1033 170.949 44.7906 171.178 44.4861C171.949 43.3528 172.822 42.2933 173.656 41.2056C174.1 40.5822 174.65 40.025 174.983 39.3306C174.252 38.2761 173.699 37.0761 172.806 36.1472C172.704 36.1561 172.501 36.1756 172.4 36.1833C172.324 36.8778 172.161 37.555 172.011 38.2361C171.579 40.0072 171.108 41.7861 170.314 43.4361C170.224 43.6017 170.128 43.935 169.883 43.7695C168.654 43.0783 167.749 41.8211 167.433 40.45C167.242 39.3089 167.305 38.1445 167.208 36.9945C167.177 35.5522 167.151 34.11 167.15 32.6667C167.14 32.48 167.167 32.28 167.072 32.1111C167.181 31.94 167.137 31.7406 167.094 31.5583C167.146 30.7761 166.905 29.9245 167.314 29.1945C168.491 29.1811 169.624 29.5322 170.761 29.7945C171.442 29.96 172.12 30.1383 172.8 30.3139C172.943 30.3572 173.086 30.3895 173.236 30.425C173.729 30.5561 174.227 30.6739 174.722 30.8028C174.901 30.8428 175.138 30.8967 175.269 30.7222C176.257 29.8022 176.866 28.5645 177.486 27.3889C177.273 26.6511 176.947 25.94 176.694 25.2111C176.318 24.2167 175.937 23.2239 175.572 22.225C175.338 21.6583 175.172 21.0622 174.917 20.5056C174.162 20.03 173.351 19.64 172.572 19.2C172.28 19.0478 171.987 18.8978 171.694 18.75C170.922 18.3689 170.162 17.9406 169.331 17.7028C169.154 17.6924 168.976 17.6866 168.797 17.6917ZM168.603 19.6389C168.812 19.6439 168.994 19.7493 169.036 19.9972C169.468 21.1083 169.907 22.2145 170.347 23.3222C170.916 24.7233 171.433 26.1478 172.036 27.5333C172.033 27.6278 172.032 27.7222 172.033 27.8167C171.356 27.8511 170.68 27.7233 170.011 27.65C169.051 27.5945 168.097 27.4578 167.139 27.3778C167.142 26.2445 167.263 25.1172 167.306 23.9861C167.443 22.6583 167.341 21.2567 167.911 20.0167C168.022 19.7898 168.334 19.6325 168.603 19.6389H168.603Z" fill="white" />
                    <path d="M85.8078 19.9611C86.7489 20.1467 87.7189 20.0233 88.67 20.1345C89.5222 20.1511 90.3678 20.2433 91.2111 20.35C91.6856 20.3667 92.1678 20.39 92.6355 20.2789C92.6244 20.3722 92.6144 20.4667 92.6044 20.56C92.2011 21.2178 91.8144 21.8933 91.5233 22.61C90.4922 24.8367 89.2867 26.9745 88.0911 29.1167C87.0155 31.0145 86.0589 32.9778 85 34.8856C82.2067 39.9045 79.1611 44.7978 75.6711 49.3645C73.7722 49.4011 71.8755 49.2378 69.9911 49.0134C68.2022 48.7345 66.42 48.3822 64.6811 47.8722C64.0811 47.7111 63.4911 47.5122 62.9033 47.3133C62.4933 47.1656 62.0789 47.0311 61.6756 46.8667C61.2544 46.7067 60.8422 46.5278 60.43 46.3511C59.6933 46.03 58.9744 45.6722 58.2689 45.2911C58.2189 44.8778 58.5244 44.5145 58.7011 44.16C59.4456 42.9889 60.4322 42.0011 61.4344 41.0533C62.8833 41.1511 64.3278 41.3245 65.7744 41.4445C66.1333 41.5489 66.5567 41.3989 66.8733 41.6345C66.8389 41.84 66.6233 41.8589 66.47 41.9167C65.2767 42.2456 64.0767 42.5478 62.8889 42.8967C62.6378 42.9433 62.6044 43.2333 62.5044 43.4245C62.3122 43.9489 62.0522 44.4711 62.0378 45.0411C62.8933 45.45 63.8611 45.5089 64.7833 45.6722C67.8167 46.0833 70.8978 46.2711 73.9489 45.9611C75.0555 44.1467 76.2111 42.3611 77.3378 40.5578C77.6733 40.0667 77.9511 39.5367 78.3244 39.0722C78.4955 38.8589 78.3944 38.56 78.35 38.3178C77.5711 35.5733 76.7111 32.8522 75.8655 30.1278C75.4989 28.9778 75.1344 27.8267 74.76 26.68C74.5678 26.1267 74.3978 25.5645 74.2022 25.0122C73.9944 24.4489 73.8289 23.8678 73.5656 23.3267C73.2444 22.9289 72.6855 22.8467 72.2067 22.7978C72.25 22.6489 72.3222 22.5111 72.4167 22.3878C72.8 22.3833 73.1822 22.3711 73.5656 22.3489C74.7789 22.2289 76.0089 22.2911 77.2267 22.2067C78.8089 22.2289 80.3844 22.0067 81.9611 21.9556C81.6544 22.62 80.7433 22.54 80.3467 23.1178C80.1467 23.3411 80.1211 23.6589 80.2011 23.9378C80.8178 26.2956 81.4367 28.6545 82.1033 30.9989C82.2 31.2633 82.2233 31.5778 82.4533 31.77C83.5722 30.0189 84.5422 28.1778 85.5678 26.37C85.9789 25.6133 86.3967 24.86 86.7778 24.0878C86.9622 23.7133 86.9789 23.2878 87.1255 22.9011C87.2644 22.4511 87.4133 22.0033 87.5722 21.56C87.6478 21.3667 87.7278 21.1733 87.8044 20.98C87.0355 20.9067 86.3811 20.4433 85.8078 19.9611Z" fill="white" />
                </svg>
                <p  className="f-2 white">{titulo}</p>
                <div className="flex row gap-20 justify-center">
                    <button onClick={ () => descargaRegistro('students') } className="button" style={filtro==='students' ? styles.Active : styles.Inactive}>Estudiantes</button>
                    <button onClick={ () => descargaRegistro('staff') } className="button" style={filtro==='staff' ? styles.Active : styles.Inactive}>Staff</button>
                </div>
        </nav>
    );
}
const styles = {
    Active: {
        backgroundColor: '#6B63B5'
    },
    Inactive: {
        backgroundColor: 'gray'
    },
}

export default Header;
