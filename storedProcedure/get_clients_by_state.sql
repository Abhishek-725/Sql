DROP PROCEDURE IF EXISTS get_clients_by_state;

DELIMITER $$
CREATE PROCEDURE get_clients_by_state(
	state varchar(5)
)
BEGIN 
	SELECT * FROM clients c
    WHERE c.state = state;
END $$
DELIMITER ;

CALL get_clients_by_state('CA');
