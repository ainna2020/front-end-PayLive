// Caladea-Regular
import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  navCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 68,
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#666',
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 8,
    borderRadius: 10
  },
  wrapper: {
    position: 'absolute',
    backgroundColor: '#4a2d8b',
    height: 550,
    width: 550,
    borderRadius: 550,
    top: -285,
    left: -95
  },
  Kios: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(243,182,56,0.15)',
    borderRadius: 10,
    marginTop: 25,
    alignItems: 'center',
    paddingVertical: 2
  }
})
