import { createCustomEqual, deepEqual } from 'fast-equals'
import { useEffect, useRef } from 'react'

export default function useDeepCompareEffectForMaps(callback, dependencies){
    useEffect(callback, dependencies.map(useDeepCompareMemorize))
}

function useDeepCompareMemorize(value) {
    const ref = useRef()
  
    if (!deepCompareEqualsForMaps(value, ref.current)) {
      ref.current = value
    }
    return ref.current
}

var isLatLngLiteral = function (obj) {
    return obj != null &&
        typeof obj === 'object' &&
        Number.isFinite(obj.lat) &&
        Number.isFinite(obj.lng);
};

const deepCompareEqualsForMaps = createCustomEqual((options) => ({
    areObjectsEqual(a, b) {
      if (
        isLatLngLiteral(a) ||
        a instanceof google.maps.LatLng ||
        isLatLngLiteral(b) ||
        b instanceof google.maps.LatLng
      ) {
        return new google.maps.LatLng(a).equals(new google.maps.LatLng(b))
      }
  
      return deepEqual(a, b)
    },
}))