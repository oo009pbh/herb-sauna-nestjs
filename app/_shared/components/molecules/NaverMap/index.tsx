'use client';
import React, { useEffect } from 'react';
import Script from 'next/script';

type NaverMapProps = {
  klass?: string;
};

function NaverMap({ klass = '' }: React.PropsWithChildren<NaverMapProps>) {
  useEffect(() => {
    // 네이버 지도 초기화
    const initMap = () => {
      if (!window.naver) return; // 네이버 객체가 로드되었는지 확인

      const SAUNA_LOCATION = {
        LAT: 37.5286917,
        LNG: 127.5521031,
      };
      
      const mapOptions = {
        center: new naver.maps.LatLng(SAUNA_LOCATION.LAT, SAUNA_LOCATION.LNG), // 서울 중심 좌표
        zoom: 16,
      };
      new naver.maps.Map('map', mapOptions);
    };

    // 스크립트 로드 완료 후 실행
    if (window.naver) {
      initMap();
    } else {
      window.addEventListener('load', initMap);
    }
    return () => window.removeEventListener('load', initMap);
  }, []);

  return (
    <>
      <div
        id='map'
        style={{ width: '100%', height: '500px' }}
        className={klass}
      ></div>

      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        strategy='beforeInteractive'
      />
    </>
  );
}

export default NaverMap;
