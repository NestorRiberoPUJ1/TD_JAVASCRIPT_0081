SELECT * from ventas;


do $$
begin
    -- Intento de restar 500 a la fila con id=1
    UPDATE ventas
    SET valor = valor - 500::money
    WHERE id = 1;
    -- Si el UPDATE anterior afectó filas...
    IF FOUND THEN
        -- ...sumo 500 a la fila con id=3
	    UPDATE ventas
	    SET valor = valor + 500::money
	    WHERE id = 5;    	
		IF FOUND THEN
			COMMIT;
		ELSE
			ROLLBACK;	
		END IF;
	ELSE
		ROLLBACK;
	END IF;
END;
$$