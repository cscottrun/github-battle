var React = require('react');

class Popular extends React.Component {
  constructor (props) {
    super();
    this.state = {
      selectedLanguage: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState( function() {
      return {
        selectedLanguage: lang
      }
    });
  }
  render() {
    let languages = ['All', 'JavaScript','Ruby','Java','CSS','Python'];
    
    return (
      <ul className = 'languages'>
        {languages.map( lang => {return(
          <li 
            style = {lang === this.state.selectedLanguage? {color: 'HotPink'} : null}
            onClick = {this.updateLanguage.bind(null, lang)}
            key= {lang}>
            {lang}
          </li>
        )
        }, this)}
      </ul>
    )
  }
}





module.exports = Popular;