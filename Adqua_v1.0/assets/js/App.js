


if( typeof( App ) == undefined || !App )
{
    var App = {};

    App.GlobalVars = {

    }

    App.Events = {
        
    }

    App.init = function()
    {
        console.log( "App init" );
    }
}

$( document ).ready( function()
{
    App.init();
});