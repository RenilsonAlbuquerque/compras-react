import { Button } from '@material-ui/core';
import React from 'react'
import SocialLogin from 'react-social-login'
import GTranslateIcon from '@material-ui/icons/GTranslate';;

class SocialButton extends React.Component {

    render() {
      const { children, triggerLogin, ...props } = this.props
      return (
          <Button onClick={triggerLogin} {...props} variant="outlined" color="primary">
            <GTranslateIcon></GTranslateIcon>
            {children}
          </Button>
      );
    }
}

export default SocialLogin(SocialButton);