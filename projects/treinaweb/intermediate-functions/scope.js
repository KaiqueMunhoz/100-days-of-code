var b; //Global Scope

function planet(){ //has 'b' variable
    function country(){ //has 'b' variable
        function state(){ //has 'b' variable

            let a; //Local Scope

            function city(){ //has the 'a' and 'b' variables
                function street(){ //has the 'a' and 'b' variables
                    function home(){ //has the 'a' and 'b' variables

                    }
                }
            }
        }
    }
}