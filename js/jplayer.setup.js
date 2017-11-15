$(function (){
  var mancavejamPlaylist = new jPlayerPlaylist({
    jPlayer: '#jquery_jplayer_4',
    cssSelectorAncestor: '#jp_container_4'
  }, [
    {
      title: 'Smack Talk',
      mp3: '/audio/mancavejam/2014-08-27/Smack-Talk.mp3',
      oga: '/audio/mancavejam/2014-08-27/Smack-Talk.ogg',
      free: true
    },
    {
      title: 'Return Trips',
      mp3: '/audio/mancavejam/2014-08-27/Return-Trips.mp3',
      oga: '/audio/mancavejam/2014-08-27/Return-Trips.ogg',
      free: true
    },
    {
      title: 'Novella Intrigue',
      mp3: '/audio/mancavejam/2014-08-27/Novella-Intrigue.mp3',
      oga: '/audio/mancavejam/2014-08-27/Novella-Intrigue.ogg',
      free: true
    },
    {
      title: 'I\'m Not Going Down',
      mp3: '/audio/mancavejam/2014-08-27/Im-Not-Going-Down.mp3',
      oga: '/audio/mancavejam/2014-08-27/Im-Not-Going-Down.ogg',
      free: true
    },
    {
      title: 'Anodyne Blues',
      mp3: '/audio/mancavejam/2014-08-07/Anodyne-Blues.mp3',
      oga: '/audio/mancavejam/2014-08-07/Anodyne-Blues.ogg',
      free: true
    },
    {
      title: 'The Standdown',
      mp3: '/audio/mancavejam/2014-07-23/The-Standdown.mp3',
      oga: '/audio/mancavejam/2014-07-23/The-Standdown.ogg',
      free: true
    },
    {
      title: 'Ghost Cowboy',
      mp3: '/audio/mancavejam/2014-07-23/Ghost-Cowboy.mp3',
      oga: '/audio/mancavejam/2014-07-23/Ghost-Cowboy.ogg',
      free: true
    },
    {
      title: 'Gains Gotten Ill',
      mp3: '/audio/mancavejam/2014-07-23/Gains-Gotten-Ill.mp3',
      oga: '/audio/mancavejam/2014-07-23/Gains-Gotten-Ill.ogg',
      free: true
    },
    {
      title: 'Coffee Shop Jam',
      mp3: '/audio/mancavejam/2014-07-23/Coffee-Shop-Jam.mp3',
      oga: '/audio/mancavejam/2014-07-23/Coffee-Shop-Jam.ogg',
      free: true
    },
    {
      title: 'Stanton Comes Home',
      mp3: '/audio/mancavejam/2014-07-17/Stanton-Comes-Home.mp3',
      oga: '/audio/mancavejam/2014-07-17/Stanton-Comes-Home.ogg',
      free: true
    },
    {
      title: 'Walking It Off',
      mp3: '/audio/mancavejam/2014-07-10/Walking-It-Off.mp3',
      oga: '/audio/mancavejam/2014-07-10/Walking-It-Off.ogg',
      free: true
    },
    {
      title: 'Tattoo Fetish',
      mp3: '/audio/mancavejam/2014-06-19/Tattoo-Fetish.mp3',
      oga: '/audio/mancavejam/2014-06-19/Tattoo-Fetish.ogg',
      free: true
    },
    {
      title: 'Seas of Dees',
      mp3: '/audio/mancavejam/2014-06-19/Seas-of-Dees.mp3',
      oga: '/audio/mancavejam/2014-06-19/Seas-of-Dees.ogg',
      free: true
    },
    {
      title: 'Lost and Found',
      mp3: '/audio/mancavejam/2014-06-19/Lost-and-Found.mp3',
      oga: '/audio/mancavejam/2014-06-19/Lost-and-Found.ogg',
      free: true
    },
    {
      title: 'Rusty Funk Beat',
      mp3: '/audio/mancavejam/2014-05-29/Rusty-Funk-Beat.mp3',
      oga: '/audio/mancavejam/2014-05-29/Rusty-Funk-Beat.ogg',
      free: true
    },
    {
      title: 'Jazz-a-ka-fusion',
      mp3: '/audio/mancavejam/2014-05-08/Jazz-a-ka-fusion.mp3',
      oga: '/audio/mancavejam/2014-05-08/Jazz-a-ka-fusion.ogg',
      free: true
    },
    {
      title: 'Road Trip',
      mp3: '/audio/mancavejam/2014-05-08/Road-Trip.mp3',
      oga: '/audio/mancavejam/2014-05-08/Road-Trip.ogg',
      free: true
    }
  ], {
    swfPath: '/scripts',
    supplied: 'mp3, oga',
    wmode: 'window'
  })

  var rustymicPlaylist = new jPlayerPlaylist({
    jPlayer: '#jquery_jplayer_3',
    cssSelectorAncestor: '#jp_container_3'
  }, [
    {
      title: 'Aladdin\'s Lamp',
      mp3: '/audio/rustymic/2013-01-27/02-Aladdins_Lamp.mp3',
      oga: '/audio/rustymic/2013-01-27/02-Aladdins_Lamp.ogg',
      free: true
    },
    {
      title: 'Ermina Gray',
      mp3: '/audio/rustymic/2011-12-10/05-Ermina_Gray_v4.mp3',
      oga: '/audio/rustymic/2011-12-10/05-Ermina_Gray_v4.ogg',
      free: true
    },
    {
      title: 'Nebmidanda',
      mp3: '/audio/rustymic/2008-01-12/04-Nebmidanda.mp3',
      oga: '/audio/rustymic/2008-01-12/04-Nebmidanda.ogg',
      free: true
    },
    {
      title: 'Fudge and Jam',
      mp3: '/audio/rustymic/2007-08-12/06-Fudge_and_Jam.mp3',
      oga: '/audio/rustymic/2007-08-12/06-Fudge_and_Jam.ogg',
      free: true
    },
    {
      title: 'Hey Joe',
      mp3: '/audio/rustymic/2007-01-14/01-Hey_Joe.mp3',
      oga: '/audio/rustymic/2007-01-14/01-Hey_Joe.ogg',
      free: true
    },
    {
      title: 'Swamp Song',
      mp3: '/audio/rustymic/2007-01-14/08-Swamp_Song.mp3',
      oga: '/audio/rustymic/2007-01-14/08-Swamp_Song.ogg',
      free: true
    },
    {
      title: 'The Safaris - Wipeout',
      mp3: '/audio/rustymic/2007-01-14/14-Wipeout.mp3',
      oga: '/audio/rustymic/2007-01-14/14-Wipeout.ogg',
      free: true
    }
  ], {
    swfPath: '/scripts',
    supplied: 'mp3, oga',
    wmode: 'window'
  })

  var minorfloodingPlaylist = new jPlayerPlaylist({
    jPlayer: '#jquery_jplayer_2',
    cssSelectorAncestor: '#jp_container_2'
  }, [
    {
      title: 'Addicted',
      mp3: '/audio/minorflooding/2004-05-26/03-Addicted_(3).mp3',
      oga: '/audio/minorflooding/2004-05-26/03-Addicted_(3).ogg',
      free: true
    },
    {
      title: 'Come Hell or High Water',
      mp3: '/audio/minorflooding/2004-06-09/04-Come_Hell_or_High_Water_(4).mp3',
      oga: '/audio/minorflooding/2004-06-09/04-Come_Hell_or_High_Water_(4).ogg',
      free: true
    },
    {
      title: 'Dave Mathews Band - Ants Marching',
      mp3: '/audio/minorflooding/2004-08-10/03-DMB_-_Ants_Marching.mp3',
      oga: '/audio/minorflooding/2004-08-10/03-DMB_-_Ants_Marching.ogg',
      free: true
    },
    {
      title: 'Tonic - If You Could Only See',
      mp3: '/audio/minorflooding/2004-08-10/08-Tonic_-_If_You_Could_Only_See.mp3',
      oga: '/audio/minorflooding/2004-08-10/08-Tonic_-_If_You_Could_Only_See.ogg',
      free: true
    }
  ], {
    swfPath: '/scripts',
    supplied: 'mp3, oga',
    wmode: 'window'
  })

  var mvplayersPlaylist = new jPlayerPlaylist({
    jPlayer: '#jquery_jplayer_1',
    cssSelectorAncestor: '#jp_container_1'
  }, [
    {
      title: 'Brian and Mike - Competition',
      mp3: '/audio/mvplayers/brian/02-Brian_and_Mike_-_Competition.mp3',
      oga: '/audio/mvplayers/brian/02-Brian_and_Mike_-_Competition.ogg',
      free: true
    },
    {
      title: 'Brian and Co - Chord Progression 165',
      mp3: '/audio/mvplayers/brian/03-Brian_and_Co_-_Chord_Progression_165.mp3',
      oga: '/audio/mvplayers/brian/03-Brian_and_Co_-_Chord_Progression_165.ogg',
      free: true
    },
    {
      title: 'Joe and Mike - John Mayer - Your Body is a Wonderland',
      mp3: '/audio/mvplayers/joe_and_mike/06-Joe_and_Mike_-_John_Mayer_-_Wonderland.mp3',
      oga: '/audio/mvplayers/joe_and_mike/06-Joe_and_Mike_-_John_Mayer_-_Wonderland.ogg',
      free: true
    },
    {
      title: 'Joe and Mike - Eric Clapton - Old Love',
      mp3: '/audio/mvplayers/joe_and_mike/08-Joe_and_Mike_-_Eric_Clapton_-_Old_Love.mp3',
      oga: '/audio/mvplayers/joe_and_mike/08-Joe_and_Mike_-_Eric_Clapton_-_Old_Love.ogg',
      free: true
    },
    {
      title: 'Mike and Co - Blazz',
      mp3: '/audio/mvplayers/mike/10-Mike_and_Co_-_Blazz.mp3',
      oga: '/audio/mvplayers/mike/10-Mike_and_Co_-_Blazz.ogg',
      free: true
    },
    {
      title: 'Mike and Co - Pinto',
      mp3: '/audio/mvplayers/mike/12-Mike_and_Co_-_Pinto_(2).mp3',
      oga: '/audio/mvplayers/mike/12-Mike_and_Co_-_Pinto_(2).ogg',
      free: true
    }
  ], {
    swfPath: '/scripts',
    supplied: 'mp3, oga',
    wmode: 'window'
  })
})
