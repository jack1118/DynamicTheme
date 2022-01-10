'use strict';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '@backgroundColor',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '@textColor',
  },
  instructions: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
  },
  icon: {
    width: 60,
    height: 60,
  },
  // The generic button and button can be one, only separated
  // here for testing purpose
  genericButton: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 3,
  },
  button: {
    backgroundColor: '@buttonColor',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
  },
};

module.exports = styles;
