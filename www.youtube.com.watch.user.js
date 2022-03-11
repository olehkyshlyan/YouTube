// ==UserScript==
// @name         YouTube | watch
// @namespace    https://www.youtube.com/watch
// @noframes
// @version      0.1
// @description  YouTube.com | www.youtube.com | watch
// @author       oleh.kyshlyan
// @match        https://www.youtube.com/watch?v=*
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// @grant        none
// ==/UserScript==

var YouTubeWatch = new function(){

  this.related = function(){
    var relatedInclosure = function(){
      var related = document.getElementById('related');
      if(related != null){
        related.style.display = 'none';
      }
    }
    setTimeout(relatedInclosure,3000);
  }

  this.notLikeButtonDesc = function(){
    var notLikeButtonDescInclosure = function(){
      jQuery(function(){
        var menuContainer = jQuery("BODY > YTD-APP > DIV[id*='content'] DIV[id*='columns'] DIV[id*='menu-container']");
        if(menuContainer.length == 1){
          var notLikeButtonDesc = menuContainer.find("YT-FORMATTED-STRING:contains('Не подобається')");
          if(notLikeButtonDesc.length == 1){
            notLikeButtonDesc.hide();
          }
        }
      });
    }
    setTimeout(notLikeButtonDescInclosure,3000);
  }

  this.shareButtonDesc = function(){
    var shareButtonDescInclosure = function(){
      jQuery(function(){
        var menuContainer = jQuery("BODY > YTD-APP > DIV[id*='content'] DIV[id*='columns'] DIV[id*='menu-container']");
        if(menuContainer.length == 1){
          var notLikeButtonDesc = menuContainer.find("YT-FORMATTED-STRING:contains('Поділитися')");
          if(notLikeButtonDesc.length == 1){
            notLikeButtonDesc.hide();
          }
        }
      });
    }
    setTimeout(shareButtonDescInclosure,3000);
  }

  this.saveButtonDesc = function(){
    var saveButtonDescInclosure = function(){
      jQuery(function(){
        var menuContainer = jQuery("BODY > YTD-APP > DIV[id*='content'] DIV[id*='columns'] DIV[id*='menu-container']");
        if(menuContainer.length == 1){
          var notLikeButtonDesc = menuContainer.find("YT-FORMATTED-STRING:contains('Зберегти')");
          if(notLikeButtonDesc.length == 1){
            notLikeButtonDesc.hide();
          }
        }
      });
    }
    setTimeout(saveButtonDescInclosure,3000);
  }

  this.structuredDescription = function(){
    var structuredDescriptionInclosure = function(){
      jQuery(function(){
        var structuredDescription = jQuery("BODY > YTD-APP > DIV[id*='content'] DIV[id*='columns'] DIV[id*='meta'] YTD-STRUCTURED-DESCRIPTION-CONTENT-RENDERER");
        if(structuredDescription.length == 1){
          structuredDescription.hide();
        }
      });
    }
    setTimeout(structuredDescriptionInclosure,3000);
  }

  this.comments = function(){
    var commentsInclosure = function(){
      var comments = document.getElementById('comments');
      if(comments != null){
        comments.style.display = 'none';
      }
    }
    setTimeout(commentsInclosure,3000);
  }

  this.chat = function(){
    var chatInclosure = function(){
      var chat = document.getElementById('chat');
      if(chat != null){
        chat.style.display = 'none';
      }
    }
    setTimeout(chatInclosure,3000);
  }

}

YouTubeWatch.related();
YouTubeWatch.notLikeButtonDesc();
YouTubeWatch.shareButtonDesc();
YouTubeWatch.saveButtonDesc();
YouTubeWatch.structuredDescription();
YouTubeWatch.comments();
YouTubeWatch.chat();
