import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  logoWrapper: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: 150,
  },
  logoText: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: 40,
  },

  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '500',
  },

  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '500',
  },

  form: {
    paddingTop: 20,
  },
  createSection: {
    flexDirection: 'row',
  },
  linkBtn: {
    paddingLeft: 17,
    color: colors.primary,
    fontSize: 16,
  },

  infoText: {
    fontSize: 17,
  },
});
