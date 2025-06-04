package br.com.pecepoli.demo.dto;

import br.com.pecepoli.demo.domain.Pacote;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class PacoteDTOMapper implements Function<Pacote, PacoteDTO> {

    @Override
    public PacoteDTO apply(Pacote pacote) {
        return new PacoteDTO(
                pacote.getLocalidade(),
                pacote.getDescricao(),
                pacote.getItems()
        );
    }
}
