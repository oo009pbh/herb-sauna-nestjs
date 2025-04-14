'use client';
import React, { useLayoutEffect } from 'react';
import Script from 'next/script';
import klass from './NaverMap.module.scss';

function NaverMap() {
  useLayoutEffect(() => {
    // 네이버 지도 초기화
    const initMap = () => {
      if (!window.naver) return; // 네이버 객체가 로드되었는지 확인

      const SAUNA_LOCATION = {
        LAT: 37.528654,
        LNG: 127.55213,
      };

      const mapOptions = {
        center: new naver.maps.LatLng(SAUNA_LOCATION.LAT, SAUNA_LOCATION.LNG),
        zoom: 16,
      };
      const map = new naver.maps.Map('map', mapOptions);

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(SAUNA_LOCATION.LAT, SAUNA_LOCATION.LNG),
        map: map,
        title: '용문산 허브찜질방',
      });

      naver.maps.Event.addListener(marker, 'click', function () {
        window.open('https://naver.me/5N1XCMhc', '_blank');
      });
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
        style={{ width: '100%' }}
        className={klass.container}
      ></div>

      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        strategy='beforeInteractive'
      />
    </>
  );
}

export default NaverMap;
